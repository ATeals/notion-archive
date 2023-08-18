import { notionPostInfo } from "@/util/notion";

export const generateMetadata = async ({ params: { postId } }: { params: { postId: string } }) => {
    const post = await notionPostInfo(postId);
    return (
        post && {
            title: ` ${post.title} | Ateals Blog`,
            description: post.description || "Teals의 개발 블로그",
            canonical: `posts/${post.id}`,
            openGraph: {
                type: "website",
                locale: "ko_KR",
                url: `posts/${post.id}`,
                title: post.title,
                description: post.description,
                site_name: "Teal's Blog",
                images: [
                    {
                        url: post.coverImg ? post.coverImg : "images/logoImg.jpg",
                        width: 1900,
                        height: 630,
                        alt: "og: 이미지",
                    },
                ],
            },
            twitter: {
                handle: "@handle",
                site: "@site",
                cardType: "summary_large_image",
            },
        }
    );
};
