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
        <aside className="shadow-md p-5 my-10 dark:bg-[#1E1E1E] bg-offWhite rounded-lg">
        <span>${callout?.icon?.emoji || ""}</span>
        ${text.join("\n")}
    </aside>
        `; // use default behavior
    });

    const mdblocks = await n2m.pageToMarkdown(id);
    const { parent } = n2m.toMarkdownString(mdblocks);

    return parent;
};

export default getPostData;
