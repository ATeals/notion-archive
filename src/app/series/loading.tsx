import { Skeleton } from "./_components/PostList";

export default () => {
    return (
        <section className="w-full">
            <h1 className="m-5 text-2xl">All Post</h1>

            <Skeleton />
        </section>
    );
};
