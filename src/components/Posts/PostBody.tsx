import { Suspense } from "react";
import LoopMDX from "../Mdx/LoopMDX";
import MDXComponent from "../Mdx/MDXComponent";

export default ({ postId }: { postId: string }) => {
    // const post = await notionPostData(postId);

    return (
        <section className="flex justify-center">
            <section className="w-full dark:prose-invert prose prose-md prose-hr:mt-5 p-5 prose-headings:mt-10 prose-blockquote:border-l-deepblue">
                <Suspense
                    fallback={<Skeleton />}
                    children={<LoopMDX postId={postId} />}
                />
            </section>
        </section>
    );
};

export const Skeleton = () => {
    return (
        <section className="w-full pt-20">
            <section className="mx-[5%] p-5">
                {[1, 2, 3].map((i) => (
                    <>
                        <h1 className=" bg-[lightgray] h-[12px] animate-pulse w-[60%] h-[32px] rounded-md my-8"></h1>
                        <div>
                            {Array(100)
                                .fill(0)
                                .map((i, index) => {
                                    const random = Math.floor(Math.random() * 8) + 1;
                                    return (
                                        <span
                                            key={index}
                                            style={{
                                                width: random * 15,
                                            }}
                                            className=" inline-block bg-[lightgray] h-5 animate-pulse h-[32px] m-1 rounded-md"
                                        ></span>
                                    );
                                })}
                        </div>
                    </>
                ))}
            </section>
        </section>
    );
};
