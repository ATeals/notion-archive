"use client";

import { AsideListObject } from "@/util/notion/type";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default ({ content }: { content: AsideListObject }) => {
    const path = usePathname();

    return (
        <>
            {content.posts.map((post) => (
                <Link
                    key={post.id}
                    href={`/${path.split("/")[1]}/${post.id}`}
                >
                    <div className="ml-2 px-2 py-1 hover:bg-highlight text-sm rounded-sm">{post.title}</div>
                </Link>
            ))}
        </>
    );
};
