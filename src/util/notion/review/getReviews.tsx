import { QueryDatabase } from "@/util/api/notion";
import { Client } from "@notionhq/client";
import { Review } from "../type";

export const getReviews = async (notion: Client) => {
    const response = await QueryDatabase(process.env.REVIEW_DB_ID as string);

    const PostList = response.results.reduce((a: Review[], c) => {
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
                star: c.properties.star.rich_text[0]?.plain_text || null,
                // @ts-ignore
                category: c.properties.category.select,
                // @ts-ignore
                state: c.properties.state.select,
                // @ts-ignore
                creator: c.properties.creator.multi_select,
                // @ts-ignore
                genre: c.properties.genre.multi_select,
                coverImg,
                id: c.id,
            },
        ];
    }, []);

    return PostList;
};
