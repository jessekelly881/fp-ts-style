export const ColorKeywordMap = { // TODO
    black: "#000000",
    silver: "#C0C0C0",
    gray: "#808080",
    white: "#FFFFFF",
    maroon: "#800000",
    red: "#FF0000",
    purple: "#800080",
    fushsia: "#FF00FF",
    green: "#008000",
    lime: "#00FF00",
    olive: "#808000",
} as const;

export type ColorKeyword = keyof typeof ColorKeywordMap;
