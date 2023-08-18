import { Client } from "@notionhq/client";
import { PostInfo } from "./type";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

export const getPostList = async (notion: Client) => {
    const response: QueryDatabaseResponse = await (
        await fetch(`https://api.notion.com/v1/databases/${process.env.POST_DB_ID}/query`, {
            method: "POST",
            headers: {
                accept: "application/json",
                "Notion-Version": "2022-06-28",
                "content-type": "application/json",
                Authorization: `Bearer ${process.env.NOTION_KEY}`,
            },
            body: JSON.stringify({
                page_size: 100,
                sorts: [
                    {
                        timestamp: "last_edited_time",
                        direction: "descending",
                    },
                ],
            }),
            next: { revalidate: false, tags: ["series"] },
        })
    ).json();

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
