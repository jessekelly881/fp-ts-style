import * as S from 'fp-ts/Show';

type ColorKeyword =
    "black" |
    "silver" |
    "gray" |
    "white" |
    "maroon" |
    "red" |
    "purple" |
    "fushsia" |
    "green" |
    "lime" |
    "olive"


interface RGB {
    type: "rgba";
    value: [number, number, number];
}

const showRgb: S.Show<RGB> = ({
    show: ({ value }) => `rgb(${value[0]}, ${value[1]}, ${value[2]})`
})

type Color = ColorKeyword | RGB;

export const showColor: S.Show<Color> = ({
    show: color => typeof color === "string" ? color : showRgb.show(color)
})

export default Color;
