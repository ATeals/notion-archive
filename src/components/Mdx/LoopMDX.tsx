import { RetrieveBlockChildren } from "@/util/api/notion";
import MDXComponent from "./MDXComponent";
import { Suspense } from "react";
import { n2m } from "@/util/n2m";

const LoopMDX = async ({ postId, next }: { postId: string; next?: string }) => {
    const { results, next_cursor } = await RetrieveBlockChildren(postId, next);

    const x = await n2m.blocksToMarkdown(results);
    const { parent } = n2m.toMarkdownString(x);

    if (next === next_cursor) return <h1>Error!!!!!</h1>;

    return (
        <>
            <MDXComponent source={parent} />
            {next_cursor !== null && (
                <Suspense
                    fallback={<Skeleton />}
                    children={
                        <LoopMDX
                            postId={postId}
                            next={next_cursor}
                        />
                    }
                />
            )}
        </>
    );
};

export const Skeleton = () => {
    return (
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
    );
};

export default LoopMDX;
