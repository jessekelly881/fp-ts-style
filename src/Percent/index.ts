/*
 * Although <percentage> values are usable in some of the same properties that
 * accept <length> values, they are not themselves <length> values.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/length
 */

import { TaggedValue } from '../utils';
import { Show } from 'fp-ts/Show'

export type Percent = TaggedValue<"Percent", number>;
export const percent = (value: number): Percent => ({ _tag: "Percent", value })

export const showPercent: Show<Percent> = {
    show: x => `${x.value}%`
}

