import { Client } from "@notionhq/client";
import { PostInfo } from "./type";

const getPostInfo = async (notion: Client, id: string): Promise<PostInfo> => {
    const response = await notion.pages.retrieve({ page_id: id });

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
