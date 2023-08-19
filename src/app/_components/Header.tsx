import Link from "next/link";

export default () => {
    return (
        <header className="fixed z-[99] flex justify-between px-2 md:px-10 py-3 w-screen bg-[white] dark:bg-darkBox shadow-sm ">
            <div className="flex items-center">
                <Link href={"/"}>
                    <h1 id="pageTitle">Teal's Log</h1>
                </Link>
            </div>

            <ul className="flex [&>*]:mx-2">
                <li>
                    <Link href={"/review"}>
                        <i className="bi bi-film mx-1"></i>
                        <span>Review</span>
                    </Link>
                </li>
                <li>
                    <Link href={"/series"}>
                        <i className="bi bi-newspaper mx-1"></i>
                        <span>Series</span>
                    </Link>
                </li>
            </ul>
        </header>
    );
};
