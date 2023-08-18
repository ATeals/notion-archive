import { notionPostList } from "@/util/notion";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://tealsblog.vercel.app/",
            lastModified: new Date(),
        },
        {
            url: "https://tealsblog.vercel.app/series",
            lastModified: new Date(),
        },
    ];
}
