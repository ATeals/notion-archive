import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { RetrieveBlockChildren } from "../../api/notion";

const getPostData = async (notion: Client, id: string): Promise<string> => {
    const n2m = new NotionToMarkdown({
        notionClient: notion,
        config: {
            separateChildPage: true,
        },
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
