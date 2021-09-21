import * as CSS from 'csstype';
import { pipe } from 'fp-ts/function';

import { LengthPercent, showLengthPercent } from '../Length';


type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

export type Edge = "top" | "bottom" | "left" | "right";
export const horizontal: Edge[] = ["left", "right"];
export const vertical: Edge[] = ["bottom", "top"];

// Internal representation.
export interface Style {
    padding: PartialRecord<Edge, LengthPercent>,
    margin: PartialRecord<Edge, LengthPercent>,
}


export const toCss = (style: Style): CSS.Properties => ({
    paddingRight: style?.padding?.right && pipe(style.padding.right, showLengthPercent.show),
    paddingLeft: style?.padding?.left && pipe(style.padding.left, showLengthPercent.show),
    paddingTop: style?.padding?.top && pipe(style.padding.top, showLengthPercent.show),
    paddingBottom: style?.padding?.bottom && pipe(style.padding.bottom, showLengthPercent.show),

    marginRight: style?.margin?.right && pipe(style.margin.right, showLengthPercent.show),
    marginLeft: style?.margin?.left && pipe(style.margin.left, showLengthPercent.show),
    marginTop: style?.margin?.top && pipe(style.margin.top, showLengthPercent.show),
    marginBottom: style?.margin?.bottom && pipe(style.margin.bottom, showLengthPercent.show),
})
