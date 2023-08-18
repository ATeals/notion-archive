import "@/styles/globals.css";
import ContentList, { Skeleton as SKContentList } from "./_components/ContentList";

import SocialLink from "@/components/SocialLink";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Head from "./_components/Head";
import { Suspense } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="ko"
            className=""
        >
            <Head />
            <body className="bg-offWhite dark:bg-darkBg dark:text-darkText">
                <Header />
                <main className="flex min-h-screen pt-[70px]">
                    <aside className="w-[20%] hidden md:block p-5 pl-10 text-[gray]">
                        <Suspense
                            fallback={<SKContentList />}
                            children={<ContentList />}
                        />
                    </aside>
                    <section className="w-full md:w-[80%] xl:w-[60%] flex justify-center shadow-xl bg-[white] dark:bg-darkBox rounded-xl md:mx-5 xl:mx-2">{children}</section>
                    <aside
                        id="Toc"
                        className="w-[20%] hidden xl:block p-5 text-[gray]"
                    >
                        <SocialLink />
                    </aside>
                </main>
                <Footer />
            </body>
        </html>
    );
}
