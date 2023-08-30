import Giscus from "@/components/Posts/Comments";
import { PostBody } from "@/components/Posts";
import Portal from "@/components/Portal";

import { Suspense } from "react";
import ReviewHeader, { Skeleton as SkReviewHeader } from "./_components/ReviewHeader";
import PortalReviewList from "../_components/PortalReviewList";
import ReviewToc from "./_components/ReviewToc";
import { RevaildatePost } from "@/components/RevalidateBtn";

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
                    component={<Suspense children={<ReviewToc reviewId={reviewId} />} />}
                    elementId="Toc"
                />

                <Portal
                    component={<RevaildatePost id={reviewId} />}
                    elementId="Revaildate"
                />
            </section>
        </>
    );
};
