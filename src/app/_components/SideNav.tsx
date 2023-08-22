import Link from "next/link";

export default () => {
    return (
        <ul className=" [&>*]:m-2">
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
    );
};
