import { Suspense } from "react";
import PostList, { Skeleton } from "./_components/PostList";
import PortalSeriesList from "./_components/PortalSeriesList";

export default () => {
    return (
        <section className="w-full">
            <h1 className="m-5 text-2xl">All Post</h1>
            <Suspense
                fallback={<Skeleton />}
                children={<PostList />}
            />
        </section>
    );
};
