import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({ auth: process.env.NOTION_KEY });

export const n2m = new NotionToMarkdown({
    notionClient: notion,
    config: {
        separateChildPage: true,
    },
});

n2m.setCustomTransformer("image", async (block) => {
    let { image } = block as any;

    if (!image?.file) return false;

    if (new Date(image?.file?.expiry_time) < new Date()) {
        const res = await (
            await fetch(`https://api.notion.com/v1/blocks/${block.id}`, {
                method: "GET",
                headers: { accept: "application/json", "Notion-Version": "2022-06-28", Authorization: `Bearer ${process.env.NOTION_KEY}` },
                next: { revalidate: 1800 },
            })
        ).json();

        image = res.image;
    }

    return `<div className="flex flex-col items-center my-10">
    <img loading="lazy" className="m-0" src="${image?.file?.url || image?.external?.url || ""}" alt="image" />
    <span className="text-[gray] italic">${image?.caption[0]?.text?.content === undefined ? "" : image?.caption[0]?.text?.content}</span>
    </div>`;
});

n2m.setCustomTransformer("bookmark", async (block) => {
    const { bookmark } = block as any;
    if (bookmark.url) {
        return true;
    }
    return false; // use default behavior
});

n2m.setCustomTransformer("callout", async (block) => {
    const { callout } = block as any;

    const text = callout.rich_text.map((i: any) => i.plain_text);

    let children = null;

    // @ts-ignore
    if (block?.has_children) {
        const x = await n2m.pageToMarkdown(block.id);
        const { parent } = n2m.toMarkdownString(x);
        children = parent;
    }

    return `
    <aside className="shadow-md p-5 my-10 dark:bg-[#1E1E1E] text-[black] bg-offWhite rounded-lg">
    ${callout?.icon?.emoji || ""} ${text.join("\n")}
    ${children !== null ? children : ""}

    </aside>
    `; // use default behavior
});
