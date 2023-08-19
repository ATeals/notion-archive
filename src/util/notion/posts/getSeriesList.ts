import { Client } from "@notionhq/client";
import { QueryDatabase, RetrieveDatabase } from "../../api/notion";

interface Series {
    title: string;
    id: string;
    posts: Array<CompactPost>;
}
interface CompactPost {
    title: string;
    id: string;
}

const getSeriesList = async (notion: Client): Promise<Series[]> => {
    const response = await RetrieveDatabase(process.env.POST_DB_ID as string);

    const { results } = await QueryDatabase(process.env.POST_DB_ID as string);

    // @ts-ignore
    const item = response.properties.series.select.options;

    const seriesArr = item.reduce((a: Series[], c: any) => {
        // @ts-ignore
        const posts = results.filter((i) => i.properties.series.select.name === c.name).reduce((a, c) => [...a, { title: c.properties.title.title[0].text.content, id: c.id }], []);
        return [...a, { title: c.name, id: c.id, posts }];
    }, []);

    return seriesArr;
};

export default getSeriesList;
