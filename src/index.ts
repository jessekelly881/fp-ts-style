import { pipe } from "fp-ts/lib/function";
import { Length } from "./Length";
import { setSides, Side, Sides } from "./sides";

export type Style = Partial<{
    padding: Sides<Length>;
    margin: Sides<Length>;
    gap: Sides<Length>;
}>


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
