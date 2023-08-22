import Portal from "@/components/Portal";
import { Suspense } from "react";

import ContentList, { Skeleton } from "@/components/ContentList/ContentList";
import { notionSeriesList } from "@/util/notion";
import { RevaildateSeries } from "@/components/RevalidateBtn";

export default () => {
    return (
        <>
            <Portal
                component={
                    <Suspense
                        fallback={<Skeleton />}
                        children={<ContentList dataFunction={notionSeriesList} />}
                    />
                }
                elementId="contentList"
            />

            <Portal
                component={<RevaildateSeries />}
                elementId="Revaildate"
            />
        </>
    );
};
