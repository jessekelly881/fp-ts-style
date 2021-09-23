import * as CSS from 'csstype';

import { LengthPercent, showLengthPercent } from '../Length';


export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

export type Edge = "top" | "bottom" | "left" | "right";
export type Dim2 = "x" | "y";
export type Dim3 = "x" | "y" | "z";

type StyleMap = (x: CSS.Properties) => CSS.Properties;

export type StyleMap1<A> = (a: A) => StyleMap;
export type StyleMap2<A, B> = (a: A) => (b: B) => StyleMap;
export type StyleMap3<A, B, C> = (a: A) => (b: B) => (c: C) => StyleMap;

type PropName = keyof CSS.Properties;

// Internal representation.
export interface StyleMaps {
    toCss: (map: StyleMap) => CSS.Properties,
    beginStyle: CSS.Properties,
    padding: (e: Edge) => (l: LengthPercent) => StyleMap,
    margin: (e: Edge) => (l: LengthPercent) => StyleMap,
    gap: (a: LengthPercent, b?: LengthPercent) => StyleMap,
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

const extendStyle = (key: PropName) => (value: string) =>
  (css: CSS.Properties): CSS.Properties =>
    ({ ...css, [key]: value })



const createStyle = (): StyleMaps => ({
  toCss: map => map({}),
  beginStyle: {},
  padding: edge => len => extendStyle(paddingMap[edge])(showLengthPercent.show(len)),
  margin: edge => len => extendStyle(marginMap[edge])(showLengthPercent.show(len)),
  gap: (a, b) => extendStyle("gap")(b ? `${showLengthPercent.show(a)} ${showLengthPercent.show(b)}` : showLengthPercent.show(a))
})

export default createStyle;
