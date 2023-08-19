export default () => {
    return (
        <head>
            <script
                dangerouslySetInnerHTML={{
                    __html: `(() => {
                const storedDarkMode = localStorage.getItem("isDark");
            
                if (storedDarkMode === null) {
                    localStorage.setItem("isDark", false);
                } else if (storedDarkMode !== "false" || window.matchMedia("(prefers-color-scheme: dark)").matches) {
                    localStorage.setItem("isDark", "true");
                    document.querySelector("html").classList.add("dark");
                }
            })();`,
                }}
            ></script>

            <link
                rel="icon"
                href="/favicon.ico"
            />

            <meta
                name="google-site-verification"
                content="SWzdnKcr1a_u4qCWr_61fw6PxQf4NZkXWHl1aDrwaeg"
            />

            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css"
            />
        </head>
    );
};
