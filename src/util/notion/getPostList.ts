import { Client } from "@notionhq/client";
import { PostInfo } from "./type";

export const getPostList = async (notion: Client) => {
    const response = await notion.databases.query({
        database_id: process.env.POST_DB_ID as string,
        sorts: [
            {
                timestamp: "last_edited_time",
                direction: "descending",
            },
        ],
    });

    const PostList = response.results.reduce((a: PostInfo[], c) => {
        // @ts-ignore
        const coverImg = c?.cover?.external.url || c?.cover?.file.url || null;

        return [
            ...a,
            {
                // @ts-ignore
                title: c.properties.title.title[0].text.content, //
                // @ts-ignore
                created_at: c.created_time.slice(0, 10),
                // @ts-ignore
                tags: c.properties.tags.multi_select,
                // @ts-ignore
                series: c.properties.series.select.name,
                // @ts-ignore
                description: c.properties.description.rich_text[0]?.text.content || null,
                coverImg,
                id: c.id,
            },
        ];
    }, []);

    return PostList;
};
