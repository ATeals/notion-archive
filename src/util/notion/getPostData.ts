import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const getPostData = async (notion: Client, id: string): Promise<string> => {
    const n2m = new NotionToMarkdown({ notionClient: notion });

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
        return `
        <aside className="shadow-md p-5 my-10 dark:bg-[#1E1E1E] text-[dark] bg-offWhite rounded-lg">
        <span>${callout?.icon?.emoji || ""}</span>
        ${text.join("\n")}
    </aside>
        `; // use default behavior
    });

    // const mdblocks = await n2m.pageToMarkdown(id);

    const arr = [];

    const res = await (
        await fetch(`https://api.notion.com/v1/blocks/${id}/children?page_size=100`, {
            method: "GET",
            headers: { accept: "application/json", "Notion-Version": "2022-06-28", Authorization: `Bearer ${process.env.NOTION_KEY}` },
            next: { revalidate: false, tags: [id] },
        })
    ).json();

    arr.push(...res.results);
    let start_cursor: string = res.next_cursor;

    while (start_cursor) {
        const res = await (
            await fetch(`https://api.notion.com/v1/blocks/${id}/children?page_size=100&start_cursor=${start_cursor}`, {
                method: "GET",
                headers: { accept: "application/json", "Notion-Version": "2022-06-28", Authorization: `Bearer ${process.env.NOTION_KEY}` },
                next: { revalidate: false, tags: [id] },
            })
        ).json();

        if (res.status >= 400) break;

        arr.push(...res.results);
        start_cursor = res.next_cursor;
    }

    const x = await n2m.blocksToMarkdown(arr);
    const { parent } = n2m.toMarkdownString(x);

    return parent;
};

export default getPostData;
