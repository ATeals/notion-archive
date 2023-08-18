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
    const response = await (
        await fetch(`https://api.notion.com/v1/databases/${process.env.POST_DB_ID}`, {
            method: "GET",
            headers: { accept: "application/json", "Notion-Version": "2022-06-28", Authorization: `Bearer ${process.env.NOTION_KEY}` },
            next: { revalidate: false, tags: ["series"] },
        })
    ).json();

    const { results } = await (
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
