import Giscus from "@/components/Posts/Comments";
import { PostBody, SKPostBody } from "@/components/Posts";
import Portal from "@/components/Portal";
import RevalidatePost from "@/components/RevalidateBtn/RevalidatePost";
import { Suspense } from "react";
import ReviewHeader, { Skeleton as SkReviewHeader } from "./ReviewHeader";

export { generateMetadata } from "./metadata";

export default ({ params: { reviewId } }: { params: { reviewId: string } }) => {
    return (
        <>
            <section className="flex flex-col w-full">
                <Suspense
                    fallback={<SkReviewHeader />}
                    children={<ReviewHeader postId={reviewId} />}
                />

                <PostBody postId={reviewId} />

                <Giscus />

                <Portal
                    component={<RevalidatePost id={reviewId} />}
                    elementId="Revaildate"
                />
            </section>
        </>
    );
};
