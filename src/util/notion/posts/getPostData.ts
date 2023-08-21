import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { RetrieveBlockChildren } from "../../api/notion";
import { bg } from "@/styles";

const getPostData = async (notion: Client, id: string): Promise<string> => {
    const n2m = new NotionToMarkdown({
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
                })
            ).json();

            image = res.image;
        }

        return `<div className="flex flex-col items-center my-10">
        <img className="m-0" src="${image?.file?.url || image?.external?.url || ""}" alt="image" />
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

        let children;

        // @ts-ignore
        if (block?.has_children) {
            const x = await n2m.pageToMarkdown(block.id);
            const { parent } = n2m.toMarkdownString(x);
            children = parent;
        }

        return `
        <aside className="shadow-md p-5 my-10 dark:bg-[#1E1E1E] text-[black] bg-offWhite rounded-lg">
        ${callout?.icon?.emoji || ""} ${text.join("\n")}
        ${children}
  
        </aside>
        `; // use default behavior
    });

    // const mdblocks = await n2m.pageToMarkdown(id);

    const arr = [];

    const res = await RetrieveBlockChildren(id);

    arr.push(...res.results);
    let start_cursor = res.next_cursor;

    while (start_cursor) {
        const res = await RetrieveBlockChildren(id, start_cursor);

        if (start_cursor === res.next_cursor) break;

        arr.push(...res.results);
        start_cursor = res.next_cursor;
    }

    const x = await n2m.blocksToMarkdown(arr);
    const { parent } = n2m.toMarkdownString(x);

    return parent;
};

export default getPostData;
