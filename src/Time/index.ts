import { TaggedValue } from '../utils';
import { Show } from 'fp-ts/Show'

type Sec = TaggedValue<"Sec", number>;
export const sec = (value: number): Sec => ({ _tag: "Sec", value })

export const showSec: Show<Sec> = {
    show: x => `${x.value}s`
}


type Ms = TaggedValue<"Ms", number>;
export const ms = (value: number): Ms => ({ _tag: "Ms", value })

export const showMs: Show<Ms> = {
    show: x => `${x.value}ms`
}


export type Time = Ms | Sec;

export const showTime: Show<Time> = {
    show: (t: Time) => {
        switch (t._tag) {
            case "Sec": return showSec.show(t as Sec)
            case "Ms": return showMs.show(t as Ms)
        }
    }
}
