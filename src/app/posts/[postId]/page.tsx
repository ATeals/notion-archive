import { Suspense } from "react";
import PostBody, { Skeleton as SkPostBody } from "./_components/PostBody";
import PostHeader, { Skeleton as SKPostHeader } from "./_components/PostHeader";

export { generateMetadata } from "./metadata";

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
            </section>
        </>
    );
};
