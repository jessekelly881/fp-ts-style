import { style } from 'typestyle';
import { Style } from '../lib'
import * as L from '../lib/Length';
import * as C from '../lib/Color';


/*
 * Maps nullable value
 *
 * t: T -> fn(t)
 * undefined -> undefined
 */
const mapOptional = <T, R>(fn: (t: T) => R) => (t?: T) =>
    typeof t === "undefined" ? undefined : fn(t)

const mapOptLenght = mapOptional(L.showLength.show);
const mapOptColor = mapOptional(C.showColor.show);
const mapOptLW = mapOptional(L.showLineWidth.show);

export const toClass = (s: Style): string =>
    style({

        /*
         * Widths
         */
        width: mapOptLenght(s.width),
        height: mapOptLenght(s.width),

        paddingTop: mapOptLenght(s.padding?.top),
        paddingBottom: mapOptLenght(s.padding?.bottom),
        paddingLeft: mapOptLenght(s.padding?.left),
        paddingRight: mapOptLenght(s.padding?.right),

        marginTop: mapOptLenght(s.margin?.top),
        marginBottom: mapOptLenght(s.margin?.bottom),
        marginLeft: mapOptLenght(s.margin?.left),
        marginRight: mapOptLenght(s.margin?.right),

        /*
         * Colors
         */
        color: mapOptColor(s.color),
        backgroundColor: mapOptColor(s.backgroundColor),

        /*
         * Borders
         */
        borderTopWidth: mapOptLW(s.borderWidth?.top),
        borderBottomWidth: mapOptLW(s.borderWidth?.bottom),
        borderLeftWidth: mapOptLW(s.borderWidth?.left),
        borderRightWidth: mapOptLW(s.borderWidth?.right),

        borderTopStyle: s.borderStyle?.top,

        /*
         * Layout
         */
        display: s.display,
        clear: s.clear,
        zIndex: s.zIndex,
        visibility: s.visibility,
        float: s.float,
        position: s.position,
        objectFit: s.objectFit
    })
