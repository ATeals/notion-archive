import { Suspense } from "react";
import ReviewList, { Skeleton } from "./_components/ReviewList";

const revalidate = 0;

export default () => {
    return (
        <section className="w-full m-2">
            <Suspense
                fallback={<Skeleton />}
                children={<ReviewList />}
            />
        </section>
    );
};
