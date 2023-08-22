import { SKPostBody } from "@/components/Posts";

import { Skeleton as SkReviewHeader } from "./_components/ReviewHeader";

export default () => {
    return (
        <>
            <section className="flex flex-col w-full">
                <SkReviewHeader />
                <SKPostBody />
            </section>
        </>
    );
};
