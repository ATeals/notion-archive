import Link from "next/link";
import og, { Data } from "open-graph";

const getOg = (url: string): Promise<Data | undefined> =>
    new Promise((resolve, reject) => {
        og(url, function (err, meta) {
            if (err) {
                reject(err);
                return;
            }
            resolve(meta);
        });
    });

export default async ({ url }: { url: string }) => {
    const data = await getOg(url);

    return (
        <>
            {data && (
                <Link
                    href={url}
                    target="_blank"
                    className="block box-border"
                >
                    <article className="shdow-md my-10 flex h-[200px] hover:scale-105">
                        <article className="h-full w-[30%]">
                            <img
                                // @ts-ignore
                                src={data.image?.url}
                                alt="Image"
                                className="h-full w-full object-cover"
                            />
                        </article>
                        <article className="w-[70%] h-full flex flex-col justify-between p-4">
                            <article className="overflow-hidden">
                                <span className="text-[24px] font-bold mb-2 ">{data.title}</span>
                                <article className="text-[12px] overflow-hidden whitespace-nowrap">{data.description}</article>
                            </article>

                            <span className="text-end overflow-clip text-[gray] text-sm">{decodeURI(url)}</span>
                        </article>
                    </article>
                </Link>
            )}
        </>
    );
};

export const SkeletonBookmark = () => {
    return (
        <div className="shadowBottom flex h-[200px]">
            <div className="h-full w-[30%] bg-[gray] animate-pulse"></div>
            <div className="w-[70%] h-full relative flex flex-col justify-between p-4">
                <div>
                    <h1 className="w-[40%] text-[24px] font-bold mb-2 bg-[gray] h-[30px] animate-pulse"></h1>
                    <div className="w-[100%] text-[12px] h-[16px] animate-pulse flex items-center"></div>
                </div>
                <small className="text-end bg-[gray] h-[12px] animate-pulse"></small>
            </div>
        </div>
    );
};
