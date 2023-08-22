import { Suspense } from "react";
import { PostBody } from "@/components/Posts";
import PostHeader, { Skeleton as SKPostHeader } from "./_components/PostHeader";
import Giscus from "../../../components/Posts/Comments";
import Portal from "@/components/Portal";
import { RevaildatePost } from "@/components/RevalidateBtn";
import PortalSeriesList from "../_components/PortalSeriesList";
import SeriesToc from "./_components/SeriesToc";

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

                <PostBody postId={postId} />

                <Giscus />

                <Portal
                    component={<RevaildatePost id={postId} />}
                    elementId="Revaildate"
                />

                <Portal
                    component={<Suspense children={<SeriesToc seriesId={postId} />} />}
                    elementId="Toc"
                />

                <PortalSeriesList />
            </section>
        </>
    );
};
