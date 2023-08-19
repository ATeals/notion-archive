"use client";

import { DarkContext } from "@/components/DarkModeProvider";
import { useContext } from "react";
import { ComponentPropsWithoutRef, ComponentType } from "react-markdown/lib/ast-to-react";

const pre: ComponentType<any> = ({ node, children, ...props }) => {
    const { isDark } = useContext(DarkContext);

    return (
        <pre
            className={isDark ? "bg-[#282C34] " : "bg-[#FAFAFA] " + " w-full m-0 p-0"}
            {...props}
        >
            {children}
        </pre>
    );
};

export { pre };
