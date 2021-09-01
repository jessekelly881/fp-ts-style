import { Newtype, iso } from 'newtype-ts'
import { Show } from 'fp-ts/Show'

export interface Sec
    extends Newtype<{ readonly Sec: unique symbol; _tag: 'Sec' }, number> {}

export const isoSec = iso<Sec>()
export const sec = isoSec.wrap
export const showSec: Show<Sec> = {
    show: (x: Sec) => `${x}s`,
}

export interface Ms
    extends Newtype<{ readonly Ms: unique symbol; _tag: 'Ms' }, number> {}

export const isoMs = iso<Ms>()
export const ms = isoMs.wrap
export const showMs: Show<Ms> = {
    show: (x: Ms) => `${x}ms`,
}


export type Time = Ms | Sec;
