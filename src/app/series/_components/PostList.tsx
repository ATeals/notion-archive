import { elapsedTime } from "@/util/formatTime";
import { notionPostList } from "@/util/notion";
import Link from "next/link";

export default async () => {
    const PostList = await notionPostList();
    return (
        <section>
            {PostList.map((post) => (
                <Link
                    href={`/posts/${post.id}`}
                    key={post.id}
                >
                    <div className="m-4 my-8 flex h-[250px] shadow-md">
                        <div className="w-[30%] mr-4">
                            <img
                                src={post.coverImg || "/images/default.PNG"}
                                alt=""
                                className="object-cover w-full h-full"
                            />
                        </div>

                        <div className="m-2 overflow-hidden w-[70%] relative">
                            <span className="text-sm md:text-md text-[gray]">{post.series}</span>
                            <h1 className="tex-xl lg:text-2xl font-bold">{post.title}</h1>
                            <p className=" m-4 text-sm md:text-md">{post.description}</p>
                            <div className="absolute bottom-0 w-full">
                                <div className="overflow-scroll flex flex-nowarp">
                                    {post.tags.map((tag: any) => (
                                        <span
                                            className="mx-2 whitespace-nowrap text-[gray] text-sm md:text-md"
                                            key={tag.id}
                                        >
                                            #{tag.name}
                                        </span>
                                    ))}
                                </div>

                                <div className=" mx-2 text-[gray] flex items-center justify-end text-sm md:text-md">
                                    <i className="bi bi-clock mr-1"></i>
                                    {elapsedTime(post.created_at)}
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </section>
    );
};

export const Skeleton = () => {
    return (
        <section>
            {[1, 2, 3, 4, 5, 6].map((post) => (
                <div className="m-4 my-8 flex h-[250px] shadow-md">
                    <div className="w-[30%] bg-[lightgray] animate-pulse"></div>

                    <div className="m-2 overflow-hidden w-[70%] relative">
                        <div className="bg-[lightgray] w-[60px] h-5 rounded-md"></div>
                        <div className="bg-[gray] w-[40%] h-8 my-2 rounded-md"></div>
                        <p className=" m-4">
                            {Array(10)
                                .fill(0)
                                .map((i, index) => {
                                    const random = Math.floor(Math.random() * 8) + 1;
                                    return (
                                        <span
                                            key={index}
                                            style={{
                                                width: random * 15,
                                            }}
                                            className=" inline-block bg-[lightgray] h-5 animate-pulse h-5 m-1 rounded-md"
                                        ></span>
                                    );
                                })}
                        </p>
                        <div className="absolute bottom-0 w-full">
                            <div className="overflow-scroll flex flex-nowarp">
                                {Array(3)
                                    .fill(0)
                                    .map((i, index) => {
                                        const random = Math.floor(Math.random() * 8) + 1;
                                        return (
                                            <span
                                                key={index}
                                                style={{
                                                    width: random * 15,
                                                }}
                                                className=" inline-block bg-[lightgray] h-5 animate-pulse h-5 m-1 rounded-md"
                                            ></span>
                                        );
                                    })}
                            </div>

                            <div className=" mx-2 text-[gray] flex items-center justify-end">
                                <i className="bi bi-clock mr-1"></i>
                                <span className=" inline-block bg-[lightgray] h-5 animate-pulse w-[30px] h-5 m-1 rounded-md"></span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};
