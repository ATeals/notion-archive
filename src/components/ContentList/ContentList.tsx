import { AsideListObject } from "@/util/notion/type";
import ClientList from "./ClientList";

export const dynamic = "force-dynamic";

export default async ({ dataFunction }: { dataFunction: () => Promise<AsideListObject[]> }) => {
    const seriesArr = await dataFunction();

    return (
        <>
            <section className="pt-[20px]">
                {seriesArr.map((content) => (
                    <div key={content.id}>
                        <div className="hover:bg-highlight  px-2 py-1 text-sm font-bold rounded-sm">{content.title}</div>
                        <div className="border-l border-l-2 border-l-[lightgray] my-2 ml-2">
                            <ClientList content={content} />
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
};

export const Skeleton = () => {
    return (
        <>
            <section className="pt-[20px]">
                {[1, 2, 3].map((series) => (
                    <div key={series}>
                        <div className="hover:bg-highlight w-[40px] h-3 bg-[lightgray] animate-pulse  px-2 py-1 text-sm font-bold rounded-sm"></div>
                        <div className="border-l border-l-2 border-l-[lightgray] my-2 ml-2">
                            {[1, 2, 3, 4].map((post) => {
                                const random = Math.floor(Math.random() * 8) + 1;
                                return (
                                    <div
                                        key={post}
                                        style={{
                                            width: random * 15,
                                        }}
                                        className="h-3 bg-[lightgray] ml-2 m-2 animate-pulse  rounded-sm"
                                    ></div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
};
