import Link from "next/link";

export default () => {
    return (
        <header className="fixed z-[99] flex justify-between px-2 md:px-10 py-3 w-screen bg-[white] dark:bg-darkBox shadow-sm ">
            <div className="flex items-center">
                <Link href={"/"}>
                    <h1 id="pageTitle">Teal's Log</h1>
                </Link>
            </div>

            <ul className="flex [&>*]:mx-1">
                <Link href={"/series"}>
                    <li>Series</li>
                </Link>
            </ul>
        </header>
    );
};
