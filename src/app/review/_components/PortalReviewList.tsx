import Portal from "@/components/Portal";
import { Suspense } from "react";

import ContentList, { Skeleton } from "@/components/ContentList/ContentList";
import { notionReviewList } from "@/util/notion";
import { RevaildateReview } from "@/components/RevalidateBtn";

export default () => {
    return (
        <>
            <Portal
                component={
                    <Suspense
                        fallback={<Skeleton />}
                        children={<ContentList dataFunction={notionReviewList} />}
                    />
                }
                elementId="contentList"
            />

            <Portal
                component={<RevaildateReview />}
                elementId="Revaildate"
            />
        </>
    );
};
