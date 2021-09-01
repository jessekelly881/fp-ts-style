/*
 * Although <percentage> values are usable in some of the same properties that
 * accept <length> values, they are not themselves <length> values.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/length
 */

import { Newtype, iso } from 'newtype-ts'
import { Show } from 'fp-ts/lib/Show'

export interface Percent
    extends Newtype<
        { readonly Percent: unique symbol; _tag: 'Percent' },
        number
    > {}

export const isoPercent = iso<Percent>()
export const percent = isoPercent.wrap

export const showPercent: Show<Percent> = {
    show: (x: Percent) => `${x}%`
}
