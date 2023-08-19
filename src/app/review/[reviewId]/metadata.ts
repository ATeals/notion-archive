import { notionPostInfo, notionReviewInfo } from "@/util/notion";

export const generateMetadata = async ({ params: { reviewId } }: { params: { reviewId: string } }) => {
    const post = await notionReviewInfo(reviewId);
    return (
        post && {
            title: ` ${post.title} | Ateals Blog`,
            description: "" || "Teals의 개발 블로그",
            canonical: `review/${post.id}`,
            openGraph: {
                type: "website",
                locale: "ko_KR",
                url: `review/${post.id}`,
                title: post.title,
                description: "",
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
