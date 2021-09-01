import { Newtype, iso } from 'newtype-ts'
import { Show } from 'fp-ts/lib/Show'

export interface Deg
    extends Newtype<{ readonly Deg: unique symbol; _tag: 'Deg' }, number> {}

export const isoDeg = iso<Deg>()
export const deg = isoDeg.wrap
export const showDeg: Show<Deg> = {
    show: (x: Deg) => `${x}deg`,
}

export interface Rad
    extends Newtype<{ readonly Rad: unique symbol; _tag: 'Rad' }, number> {}

export const isoRad = iso<Rad>()
export const rad = isoRad.wrap
export const showRad: Show<Rad> = {
    show: (x: Rad) => `${x}rad`,
}

export interface Grad
    extends Newtype<{ readonly Grad: unique symbol; _tag: 'Grad' }, number> {}

export const isoGrad = iso<Grad>()
export const grad = isoGrad.wrap
export const showGrad: Show<Grad> = {
    show: (x: Grad) => `${x}grad`,
}

export interface Turn
    extends Newtype<{ readonly Turn: unique symbol; _tag: 'Turn' }, number> {}

export const isoTurn = iso<Turn>()
export const turn = isoTurn.wrap
export const showTurn: Show<Turn> = {
    show: (x: Turn) => `${x}turn`,
}

export type Angle = Deg | Rad | Grad | Turn
