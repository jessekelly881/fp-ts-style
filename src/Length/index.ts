import { Show } from 'fp-ts/Show'
import { TaggedValue } from '../utils';
import { percent, Percent, showPercent } from '../Percent';

/*
 * Font relative lengths.
 */

type Ch = TaggedValue<"Ch", number>;
export const ch = (value: number): Ch => ({ _tag: "Ch", value })

export const showCh: Show<Ch> = {
    show: x => `${x.value}ch`
}


type Em = TaggedValue<"Em", number>;
export const em = (value: number): Em => ({ _tag: "Em", value })

export const showEm: Show<Em> = {
    show: x => `${x.value}em`
}


type Ex = TaggedValue<"Ex", number>;
export const ex = (value: number): Ex => ({ _tag: "Ex", value })

export const showEx: Show<Ex> = {
    show: x => `${x.value}ex`
}


type Rem = TaggedValue<"Rem", number>;
export const rem = (value: number): Rem => ({ _tag: "Rem", value })

export const showRem: Show<Rem> = {
    show: x => `${x.value}rem`
}


/*
 * Viewport relative
 */


type Vh = TaggedValue<"Vh", number>;
export const vh = (value: number): Vh => ({ _tag: "Vh", value })

export const showVh: Show<Vh> = {
    show: x => `${x.value}vh`
}


type Vw = TaggedValue<"Vw", number>;
export const vw = (value: number): Vw => ({ _tag: "Vw", value })

export const showVw: Show<Vw> = {
    show: x => `${x.value}vw`
}


type Vmin = TaggedValue<"Vmin", number>;
export const vmin = (value: number): Vmin => ({ _tag: "Vmin", value })

export const showVmin: Show<Vmin> = {
    show: x => `${x.value}vmin`
}


type Vmax = TaggedValue<"Vmax", number>;
export const vmax = (value: number): Vmax => ({ _tag: "Vmax", value })

export const showVmax: Show<Vmax> = {
    show: x => `${x.value}vmax`
}


/*
 * Absolute
 */

type Px = TaggedValue<"Px", number>;
export const px = (value: number): Px => ({ _tag: "Px", value })

export const showPx: Show<Px> = {
    show: x => `${x.value}px`
}


type Pt = TaggedValue<"Pt", number>;
export const pt = (value: number): Pt => ({ _tag: "Pt", value })

export const showPt: Show<Pt> = {
    show: x => `${x.value}pt`
}


type Cm = TaggedValue<"Cm", number>;
export const cm = (value: number): Cm => ({ _tag: "Cm", value })

export const showCm: Show<Cm> = {
    show: x => `${x.value}cm`
}


type Mm = TaggedValue<"Mm", number>;
export const mm = (value: number): Mm => ({ _tag: "Mm", value })

export const showMm: Show<Mm> = {
    show: x => `${x.value}mm`
}


type Inch = TaggedValue<"Inch", number>;
export const inch = (value: number): Inch => ({ _tag: "Inch", value })

export const showInch: Show<Inch> = {
    show: x => `${x.value}in`
}


export type Length = Ch | Em | Ex | Rem | Vh | Vw | Vmin | Vmax | Px | Pt | Cm | Mm | Inch;

export const showLength: Show<Length> = {
    show: (l: Length) => {
        switch (l._tag) {
            case "Ch": return showCh.show(l as Ch)
            case "Em": return showEm.show(l as Em)
            case "Ex": return showEx.show(l as Ex)
            case "Rem": return showRem.show(l as Rem)
            case "Vh": return showVh.show(l as Vh)
            case "Vw": return showVw.show(l as Vw)
            case "Vmin": return showVmin.show(l as Vmin)
            case "Vmax": return showVmax.show(l as Vmax)
            case "Px": return showPx.show(l as Px)
            case "Pt": return showPt.show(l as Pt)
            case "Cm": return showCm.show(l as Cm)
            case "Mm": return showMm.show(l as Mm)
            case "Inch": return showInch.show(l as Inch)
        }
    }
}

export type LengthPercent = Length | Percent;

export const showLengthPercent: Show<LengthPercent> = {
    show: (l: LengthPercent) => {
        switch (l._tag) {
            case "Ch": return showCh.show(l as Ch)
            case "Em": return showEm.show(l as Em)
            case "Ex": return showEx.show(l as Ex)
            case "Rem": return showRem.show(l as Rem)
            case "Vh": return showVh.show(l as Vh)
            case "Vw": return showVw.show(l as Vw)
            case "Vmin": return showVmin.show(l as Vmin)
            case "Vmax": return showVmax.show(l as Vmax)
            case "Px": return showPx.show(l as Px)
            case "Pt": return showPt.show(l as Pt)
            case "Cm": return showCm.show(l as Cm)
            case "Mm": return showMm.show(l as Mm)
            case "Inch": return showInch.show(l as Inch)
            case "Percent": return showPercent.show(l as Percent)
        }
    }
}

/*
 * utils
 */

export const full = percent(100);
