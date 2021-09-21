import * as CSS from 'csstype';

import { LengthPercent, showLengthPercent } from '../Length';


export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

export type Edge = "top" | "bottom" | "left" | "right";
export const horizontal: Edge[] = ["left", "right"];
export const vertical: Edge[] = ["bottom", "top"];


type StyleMap = (x: CSS.Properties) => CSS.Properties;

export type StyleMap1<A> = (a: A) => StyleMap;
export type StyleMap2<A, B> = (a: A) => (b: B) => StyleMap;
export type StyleMap3<A, B, C> = (a: A) => (b: B) => (c: C) => StyleMap;

type PropName = keyof CSS.Properties;

// Internal representation.
export interface StyleMaps {
    toCss: (map: StyleMap) => CSS.Properties,
    padding: StyleMap2<Edge, LengthPercent>,
    margin: StyleMap2<Edge, LengthPercent>,
}

const paddingMap: Record<Edge, PropName> = {
  "bottom": "paddingBottom",
  "top": "paddingTop",
  "left": "paddingLeft",
  "right": "paddingRight"
}

const marginMap: Record<Edge, PropName> = {
  "bottom": "marginBottom",
  "top": "marginTop",
  "left": "marginLeft",
  "right": "marginRight"
}


const createStyle = (): StyleMaps => ({
  toCss: map => map({}),
  padding: edge => len => css => ({ ...css, [paddingMap[edge]]: showLengthPercent.show(len) }),
  margin: edge => len => css => ({ ...css, [marginMap[edge]]: showLengthPercent.show(len) })
})

export default createStyle;
