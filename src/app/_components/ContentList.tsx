import { notionSeriesList } from "@/util/notion";
import Link from "next/link";
import DarkModeBtn from "./DarkModeBtn";

export default async () => {
    const seriesArr = await notionSeriesList();

    return (
        <>
            <section className="pt-[20px]">
                {seriesArr.map((series) => (
                    <div key={series.id}>
                        <div className="hover:bg-highlight  px-2 py-1 text-sm font-bold rounded-sm">{series.title}</div>
                        <div className="border-l border-l-2 border-l-[lightgray] my-2 ml-2">
                            {series.posts.map((post) => (
                                <Link href={`/posts/${post.id}`}>
                                    <div
                                        key={post.id}
                                        className="ml-2 px-2 py-1 hover:bg-highlight text-sm rounded-sm"
                                    >
                                        {post.title}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
            <DarkModeBtn />
        </>
    );
};
