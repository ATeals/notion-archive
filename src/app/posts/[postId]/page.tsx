import { Suspense } from "react";
import PostBody, { Skeleton as SkPostBody } from "./_components/PostBody";
import PostHeader, { Skeleton as SKPostHeader } from "./_components/PostHeader";
import Giscus from "./_components/Comments";
import Portal from "@/components/Portal";
import { RevaildatePost } from "@/components/RevalidateBtn";

export { generateMetadata } from "./metadata";

// export async function generateStaticParams() {
//     const posts = await notionPostList();
//     return posts.map((post) => ({
//         postId: post.id,
//     }));
// }

export default ({ params: { postId } }: { params: { postId: string } }) => {
    return (
        <>
            <section className="flex flex-col w-full">
                <Suspense
                    fallback={<SKPostHeader />}
                    children={<PostHeader postId={postId} />}
                />
                <Suspense
                    fallback={<SkPostBody />}
                    children={<PostBody postId={postId} />}
                />

                <Giscus />

                <Portal
                    component={<RevaildatePost id={postId} />}
                    elementId="Revaildate"
                />
            </section>
        </>
    );
};
