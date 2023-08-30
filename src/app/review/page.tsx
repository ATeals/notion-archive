import { Suspense } from "react";
import ReviewList, { Skeleton } from "./_components/ReviewList";
import PortalReviewList from "./_components/PortalReviewList";

export default () => {
    return (
        <section className="w-full m-2">
            <Suspense
                fallback={<Skeleton />}
                children={<ReviewList />}
            />

            <PortalReviewList />
        </section>
    );
};
