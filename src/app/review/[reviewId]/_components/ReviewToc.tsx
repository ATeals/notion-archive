import { Toc } from "@/components/Posts";
import { notionPostData } from "@/util/notion";

export default async ({ reviewId }: { reviewId: string }) => {
    const post = await notionPostData(reviewId);
    return <Toc post={post} />;
};
