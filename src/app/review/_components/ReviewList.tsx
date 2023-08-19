import { Tag, TagBox } from "@/components/Tag";
import { elapsedTime } from "@/util/formatTime";
import { notionReviews } from "@/util/notion";
import Link from "next/link";

export default async () => {
    const res = await notionReviews();
    return (
        <article className=" grid grid-cols-1 md:grid-cols-2 gap-2">
            {res.map((review) => (
                <Link
                    key={review.id}
                    href={`/review/${review.id}`}
                >
                    <div className="shadow-xl h-[400px] hover:scale-[105%] rounded-xl p-2 hover:cursor-pointer">
                        <div className="h-[200px] shadow-inner rounded-xl">
                            <img
                                src={review.coverImg}
                                alt=""
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="p-2 h-[200px] relative">
                            <div className="flex justify-between items-center mb-4">
                                <div className="text-lg">{review.title}</div>
                                {review.category && <Tag tag={review.category} />}
                            </div>

                            <TagBox tags={review.creator} />
                            <TagBox tags={review.genre} />

                            <div className="absolute bottom-0 left-0 p-4 flex justify-between w-full">
                                <span>{review.star}</span>
                                <span>{elapsedTime(review.created_at)}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </article>
    );
};

export const Skeleton = () => {
    return (
        <article className=" grid grid-cols-1 md:grid-cols-2 gap-2 animate-pulse">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                    key={i}
                    className="shadow-xl h-[400px] hover:scale-[105%] rounded-xl p-2"
                >
                    <div className="h-[200px] bg-lightgray shadow-inner rounded-xl"></div>
                    <div className="p-2 h-[200px] relative">
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-lg"></div>
                        </div>
                    </div>
                </div>
            ))}
        </article>
    );
};
