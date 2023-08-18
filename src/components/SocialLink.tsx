import Link from "next/link";

const SocialItem = [
    { title: "Github", link: "https://github.com/ATeals", icon: <i className="bi bi-github" /> },
    { title: "Velog", link: "https://velog.io/@ateals_12", icon: <i className="bi bi-mailbox2"></i> },
    { title: "Instagram", link: "https://www.instagram.com/turquoise_0o0/", icon: <i className="bi bi-instagram"></i> },
];

const ContextBox = () => {
    return (
        <>
            <section className="p-5 ">
                <div>Contect</div>
                <ul className="">
                    {SocialItem.map((i) => (
                        <li
                            key={i.title}
                            className="hover:bg-highlight p-1 py-2 rounded-md"
                        >
                            <Link href={i.link}>
                                {i.icon}
                                <span className="ml-2">{i.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default ContextBox;
