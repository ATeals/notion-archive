export { metadata } from "./matadata";

export const revalidate = 0;

export default async () => {
    return (
        <section className="w-full p-5 ">
            <section className="flex items-center">
                <img
                    src={"https://avatars.githubusercontent.com/u/125727432?v=4"}
                    alt="profile"
                    className="rounded-2xl w-[30%] h-[30%]"
                />
                <article className="w-[60%] dark:bg-darkBg [&>*]:m-2 [&>*]:text-lg bg-offWhite shadow-md m-5 p-3 rounded-xl">
                    <h1>안녕하세요!</h1>
                    <div>
                        개발자 지망생 <strong className="text-deepblue font-bold text-2xl">Teal</strong> 입니다.
                    </div>
                    <div>코드 작성도 좋아하지만 남의 코드 읽는 걸 더 좋아합니다.</div>
                    <div>글 작성도 좋아하지만 남의 글 읽는 걸 더 좋아합니다.</div>
                </article>
            </section>
        </section>
    );
};
