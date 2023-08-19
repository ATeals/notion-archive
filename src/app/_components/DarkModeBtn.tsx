"use client";

import useDark from "@/hooks/useDark";
import { useContext } from "react";
import { DarkContext } from "../../components/DarkModeProvider";

export default () => {
    const { isDark, setIsDark } = useContext(DarkContext);

    const modeToggle = () => {
        // if (!setIsDark) return;
        // @ts-ignore
        document.querySelector("html").classList.toggle("dark");

        setIsDark((i) => !i);
    };

    return (
        <>
            <div
                onClick={modeToggle}
                className=" flex items-center hover:bg-highlight text-sm rounded-lg my-10 p-2 hover:cursor-pointer"
            >
                {!isDark ? (
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
