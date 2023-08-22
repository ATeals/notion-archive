import { Tag, TagBox } from "@/components/Tag";
import { notionReviewInfo } from "@/util/notion";

export default async ({ postId }: { postId: string }) => {
    const reviewInfo = await notionReviewInfo(postId);
    return (
        <section
            className="bg-fixed w-full h-[400px] bg-cover bg-no-repeat bg-center relative"
            style={{
                backgroundImage: `url(${reviewInfo.coverImg})`,
            }}
        >
            <div className="absolute text-[white] top-0 left-0 w-full h-full bg-[black] bg-opacity-30 p-10">
                <div className="mb-10">{reviewInfo.category && <Tag tag={reviewInfo.category} />}</div>

                <div className="text-[lightgray]">{reviewInfo.created_at}</div>
                <div className="font-bold text-3xl mb-10">{reviewInfo.title}</div>
                <div className="my-10">{reviewInfo.creator && <TagBox tags={reviewInfo.creator} />}</div>
                {reviewInfo.genre && <TagBox tags={reviewInfo.genre} />}
            </div>
        </section>
    );
};

export const Skeleton = () => {
    return (
        <section className="bg-fixed w-full h-[400px] relative">
            <div className="absolute text-[white] top-0 left-0 w-full h-full bg-[black] bg-opacity-30 p-10 [&>*]:rounded-md  [&>*]:animate-pulse">
                <div className="mb-20 bg-[lightgray] w-[75px] h-5"></div>
                <div className="bg-[lightgray] w-[100px] h-5"></div>
                <div className="bg-[lightgray] w-[400px] h-10 my-3"></div>
                <div className="mt-10">
                    {[1, 2, 3].map((i) => (
                        <span
                            className="mr-4 bg-[lightgray] w-[50px] h-5 inline-block rounded-md animate-pulse"
                            key={i}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
};
