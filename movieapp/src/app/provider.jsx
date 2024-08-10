"use client";

import { ThemeProvider } from "next-themes";
export default function Provider({ children }) {
    return <ThemeProvider defaultTheme="system" attribute="class">
        <div className=" dark:text-white text-gray-700 h-full" >
        {children}
        </div>
        </ThemeProvider>;
}