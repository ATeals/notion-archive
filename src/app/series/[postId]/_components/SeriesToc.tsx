import { Toc } from "@/components/Posts";
import { notionPostData } from "@/util/notion";

export default async ({ seriesId }: { seriesId: string }) => {
    const post = await notionPostData(seriesId);
    return <Toc post={post} />;
};
