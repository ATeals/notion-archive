"use client";

import useDark from "@/hooks/useDark";
import { Dispatch, ReactNode, SetStateAction, createContext } from "react";

export const DarkContext = createContext<{ isDark: boolean | undefined; setIsDark: Dispatch<SetStateAction<boolean | undefined>> }>({ isDark: undefined, setIsDark: () => {} });

export default ({ children }: { children: ReactNode }) => {
    const [isDark, setIsDark] = useDark();

    return <DarkContext.Provider value={{ isDark, setIsDark }}>{children}</DarkContext.Provider>;
};
