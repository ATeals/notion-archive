import { Client } from "@notionhq/client";
import { Review } from "../type";
import { RetrievePage } from "../../api/notion";

const getReviewInfo = async (notion: Client, id: string): Promise<Review> => {
    const response = await RetrievePage(id);

    // @ts-ignore
    const coverImg = response?.cover?.external.url || response?.cover?.file.url || null;

    return {
        // @ts-ignore
        title: response.properties.title.title[0].text.content, //
        // @ts-ignore
        created_at: response.created_time.slice(0, 10),
        // @ts-ignore
        star: response.properties.star.rich_text[0]?.plain_text || null,
        // @ts-ignore
        category: response.properties.category.select,
        // @ts-ignore
        state: response.properties.state.select,
        // @ts-ignore
        creator: response.properties.creator.multi_select,
        // @ts-ignore
        genre: response.properties.genre.multi_select,
        coverImg,
        id: response.id,
    };
};

export default getReviewInfo;
