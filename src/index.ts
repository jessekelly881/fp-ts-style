import * as S from 'fp-ts/Semigroup';
import { pipe } from "fp-ts/lib/function";
import { Length, LineWidth } from "./Length";
import { setSides, Side, Sides } from "./utils/sides";
import Color from './Color';
import { Globals } from './utils';



type Clear = Globals | "none" | "left" | "right" | "inline-start" | "inline-end";
type Display = Globals | "inline" | "block" | "flex" | "grid" | "inline-block" | "inline-flex" | "table" | "none";
type Position = Globals | "static" | "relative" | "fixed" | "absolute" | "sticky";
type BorderStyle = Globals | "none" | "hidden" | "dotted" | "dashed";
type ZIndex = Globals | number | "auto";
type Visibility = Globals | "visible" | "hidden" | "collapse";
type Float = Globals | "left" | "right" | "none" | "inline-start" | "inline-end";

export type Style = Partial<{
    padding: Sides<Length>;
    margin: Sides<Length>;
    gap: Sides<Length>;
    width: Length;
    height: Length;
    borderWidth: Sides<LineWidth>;
    borderColor: Sides<Color>;
    borderStyle: Sides<BorderStyle>;
    clear: Clear;
    display: Display;
    position: Position;
    zIndex: ZIndex;
    visibility: Visibility;
    float: Float;
}>

const empty: Style = {};

/*
 * optional :: Semigroup a -> Semigroup a
 */
export const optional = <T>(s: S.Semigroup<T>): S.Semigroup<T | undefined> => ({
    concat: (x, y) => typeof x === "undefined" ? (typeof y === "undefined" ? undefined : y) : (typeof y === "undefined" ? x : s.concat(x,y))
})


/*
 * Raw generator functions
 */

export const padding = (side: Side = "all") => (val: Length): Style => pipe(
    setSides(side)(val),
    x => ({ padding: x })
)

export const margin = (side: Side = "all") => (val: Length): Style => pipe(
    setSides(side)(val),
    x => ({ margin: x })
)

export const gap = (side: Side = "all") => (val: Length): Style => pipe(
    setSides(side)(val),
    x => ({ gap: x })
)

export const width = (val: Length): Style => ({ width: val });
export const height = (val: Length): Style => ({ height: val });

export const borderWidth = (side: Side = "all") => (val: LineWidth): Style => pipe(
    setSides(side)(val),
    x => ({ borderWidth: x })
)

const sidesSemigroup = <T>() => S.struct<Sides<T>>({
    top: optional(S.last<T>()),
    bottom: optional(S.last<T>()),
    left: optional(S.last<T>()),
    right: optional(S.last<T>()),
})

const styleSemigroup = S.struct<Style>({
    padding: optional(sidesSemigroup<Length>()),
    margin: optional(sidesSemigroup<Length>()),
    gap: optional(sidesSemigroup<Length>()),
    width: optional(S.last<Length>()),
    height: optional(S.last<Length>()),
    borderWidth: optional(sidesSemigroup<LineWidth>()),
    borderColor: optional(sidesSemigroup<Color>()),
    borderStyle: optional(sidesSemigroup<BorderStyle>()),
    clear: optional(S.last()),
    display: optional(S.last()),
    position: optional(S.last()),
    zIndex: optional(S.last()),
    visibility: optional(S.last()),
    float: optional(S.last()),
})

export const style = (...styles: Style[]): Style => pipe(
    styleSemigroup,
    S.concatAll,
    x => x(empty)(styles),
)
