import { Suspense } from "react";
import ReviewList, { Skeleton } from "./_components/ReviewList";
import { RetrieveBlockChildren } from "@/util/api/notion";

export default async () => {
    const res = RetrieveBlockChildren("703b7e8f528a431ea00e8cfd9536f086");
    console.log(res);
    return (
        <section className="w-full m-2">
            <Suspense
                fallback={<Skeleton />}
                children={<ReviewList />}
            />
        </section>
    );
};
