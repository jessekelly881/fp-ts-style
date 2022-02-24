import { Show } from 'fp-ts/lib/Show'
import { TaggedValue } from '../utils';


type Deg = TaggedValue<"Deg", number>;
export const deg = (value: number): Deg => ({ _tag: "Deg", value })

export const showDeg: Show<Deg> = {
    show: x => `${x.value}deg`
}


type Rad = TaggedValue<"Rad", number>;
export const rad = (value: number): Rad => ({ _tag: "Rad", value })

export const showRad: Show<Rad> = {
    show: x => `${x.value}rad`
}


type Grad = TaggedValue<"Grad", number>;
export const grad = (value: number): Grad => ({ _tag: "Grad", value })

export const showGrad: Show<Grad> = {
    show: x => `${x.value}grad`
}


type Turn = TaggedValue<"Turn", number>;
export const turn = (value: number): Turn => ({ _tag: "Turn", value })

export const showTurn: Show<Turn> = {
    show: x => `${x.value}turn`
}


export type Angle = Deg | Rad | Grad | Turn

export const showAngle: Show<Angle> = {
    show: (a: Angle) => {
        switch (a._tag) {
            case "Deg": return showDeg.show(a as Deg)
            case "Rad": return showRad.show(a as Rad)
            case "Grad": return showGrad.show(a as Grad)
            case "Turn": return showTurn.show(a as Turn)
        }
    }
}
