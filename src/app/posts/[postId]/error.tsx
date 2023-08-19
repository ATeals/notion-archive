"use client";

import Portal from "@/components/Portal";
import { RevaildatePost } from "@/components/RevalidateBtn";

import Error from "next/error";

import { useParams } from "next/navigation";
import { useEffect } from "react";

export default ({ error, reset }: { error: Error; reset: () => void }) => {
    const { postId } = useParams();

    useEffect(() => {
        console.log(error);
        console.log(postId);
    }, []);

    return (
        <>
            <section className="flex flex-col items-center mt-[100px] w-full">
                <img
                    src="/images/error.JPG"
                    alt=""
                    className="w-[50%] h-[30%] md:h-[50%] rounded-xl mb-10"
                />
                <h1 className="font-bold text-2xl">아앗! 페이지가 없어요!</h1>
            </section>

            <Portal
                component={<RevaildatePost id={postId as string} />}
                elementId="Revaildate"
            />
        </>
    );
};
