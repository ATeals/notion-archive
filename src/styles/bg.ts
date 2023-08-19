export const bg = (color: string) => {
    const colors: { [color: string]: string } = {
        red: "#FFE2DD ",
        purple: "#E8DDEE ",
        blue: "#D2E4EF",
        brown: "#EEDFDA ",
        gray: "#f2f2f2",
        green: "#DAECDA ",
        orange: "#F9DEC9 ",
        pink: "#F4E0E9 ",
        yellow: "#FDECC8",
        default: "#f2f2f2",
    };
    return Object.keys(colors).includes(color) ? colors[color] : colors["default"];
};
