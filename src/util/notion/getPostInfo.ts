import { Client } from "@notionhq/client";
import { PostInfo } from "./type";

const getPostInfo = async (notion: Client, id: string): Promise<PostInfo> => {
    const response = await (
        await fetch(`https://api.notion.com/v1/pages/${id}`, {
            method: "GET",
            headers: { accept: "application/json", "Notion-Version": "2022-06-28", Authorization: `Bearer ${process.env.NOTION_KEY}` },
            next: { revalidate: false, tags: [id] },
        })
    ).json();

    // @ts-ignore
    const coverImg = response?.cover?.external.url || response?.cover?.file.url || null;

    return {
        // @ts-ignore
        title: response.properties.title.title[0].text.content, //
        // @ts-ignore
        created_at: response.created_time.slice(0, 10),
        // @ts-ignore
        tags: response.properties.tags.multi_select,
        // @ts-ignore
        series: response.properties.series.select.name,
        // @ts-ignore
        description: response.properties.description.rich_text[0]?.text.content || null,
        id: response.id,
        coverImg,
    };
};

export default getPostInfo;
