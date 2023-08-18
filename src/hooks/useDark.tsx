"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default (): [boolean | undefined, Dispatch<SetStateAction<boolean | undefined>>] => {
    const [isDark, setIsDark] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        if (isDark !== undefined) {
            const shouldSetDark = isDark ? "true" : "false";
            document.querySelector("html")?.classList.toggle("dark", isDark);
            localStorage.setItem("darkMode", shouldSetDark);
        } else {
            const storedDarkMode = localStorage.getItem("darkMode");
            const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

            setIsDark(storedDarkMode === "true" || (prefersDarkScheme && storedDarkMode !== "false"));
        }
    }, [isDark]);

    return [isDark, setIsDark];
};
