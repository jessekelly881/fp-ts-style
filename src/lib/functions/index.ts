import { Show } from 'fp-ts/lib/Show';
import { TaggedValue } from '../utils';

export type Min<A> = TaggedValue<"Min", [A, A]>
export const min = <A>(a: A, b: A): Min<A> => ({ _tag: "Min", value: [a, b]})
export const getShowMin = <A>({show}: Show<A>): Show<Min<A>> => ({
    show: ({value}) => `min(${show(value[0])}, ${show(value[1])})`
})


export type Max<A> = TaggedValue<"Max", [A, A]>
export const max = <A>(a: A, b: A): Max<A> => ({ _tag: "Max", value: [a, b]})
export const getShowMax = <A>({ show }: Show<A>): Show<Max<A>> => ({
    show: ({value}) => `max(${show(value[0])}, ${show(value[1])})`
})


export type Clamp<A> = TaggedValue<"Clamp", [A, A, A]>
export const clamp = <A>(a: A, b: A, c: A): Clamp<A> => ({ _tag: "Clamp", value: [a, b, c]})
export const getShowClamp = <A>({ show }: Show<A>): Show<Clamp<A>> => ({
    show: ({value}) => `clamp(${show(value[0])}, ${show(value[1])}, ${show(value[2])})`
})


/*
 * Calc
 * Operators: +, -, *, /
 */
