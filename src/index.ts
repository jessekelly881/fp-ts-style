import * as S from 'fp-ts/Semigroup';
import { pipe } from "fp-ts/lib/function";
import { Length } from "./Length";
import { setSides, Side, Sides } from "./sides";

export type Style = Partial<{
    padding: Sides<Length>;
    margin: Sides<Length>;
    gap: Sides<Length>;
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

})

export const style = (...styles: Style[]): Style => pipe(
    styleSemigroup,
    S.concatAll,
    x => x(empty)(styles),
)
