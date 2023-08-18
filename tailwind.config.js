/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        colors: {
            offWhite: "#F1F5F9",
            highlight: "#c6d6f5",
            deepblue: "#577CF1",
            lightgray: "f2f2f2",

            darkText: "#E0E0E0",

            darkBg: "#1E1E1E",
            darkBox: "#212529",
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
