"use client";

import useDark from "@/hooks/useDark";
import { useEffect } from "react";

export default () => {
    const [isDarkMode, setIsDarkMode] = useDark();

    const modeToggle = () => {
        // @ts-ignore
        document.querySelector("html").classList.toggle("dark");
        setIsDarkMode((i) => !i);
    };

    return (
        <>
            <div
                onClick={modeToggle}
                className=" flex items-center hover:bg-highlight text-sm rounded-lg my-10 p-2 hover:cursor-pointer"
            >
                {!isDarkMode ? (
                    <>
                        <i className="bi bi-brightness-high mr-2"></i>
                        <span>light</span>
                    </>
                ) : (
                    <>
                        <i className="bi bi-moon mr-2"></i>
                        <span>dark</span>
                    </>
                )}
            </div>
        </>
    );
};
