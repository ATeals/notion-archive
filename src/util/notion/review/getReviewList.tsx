import { QueryDatabase, RetrieveDatabase } from "@/util/api/notion";
import { Client } from "@notionhq/client";
import { AsideListObject } from "../type";

const getReviewList = async (notion: Client): Promise<AsideListObject[]> => {
    const response = await RetrieveDatabase(process.env.REVIEW_DB_ID as string, ["reviews"]);

    const { results } = await QueryDatabase(process.env.REVIEW_DB_ID as string, ["reviews"]);

    // @ts-ignore
    const item = response.properties.category.select.options;

    const seriesArr = item.reduce((a: AsideListObject[], c: any) => {
        // @ts-ignore
        const posts = results.filter((i) => i.properties.category.select.name === c.name).reduce((a, c) => [...a, { title: c.properties.title.title[0].text.content, id: c.id }], []);

        return [...a, { title: c.name, id: c.id, posts }];
    }, []);

    return seriesArr;
};

export default getReviewList;
