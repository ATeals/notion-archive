import { Client } from "@notionhq/client";

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
    const database_id = "f8db5f795d7241a69b37518bc3322047";

    const response = await notion.databases.retrieve({ database_id });

    const { results } = await notion.databases.query({
        database_id,
        sorts: [
            {
                timestamp: "last_edited_time",
                direction: "descending",
            },
        ],
    });

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
