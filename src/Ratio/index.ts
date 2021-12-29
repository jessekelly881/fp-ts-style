import { Newtype, prism } from 'newtype-ts'
import * as S from 'fp-ts/Show';
import * as O from 'fp-ts/Option';

interface Ratio extends Newtype<{ readonly Ratio: unique symbol }, [number, number]> {}
const isRatio = (a: [number, number]) => a[0] > 0 && a[1] > 0;

const prismRatio = prism<Ratio>(isRatio)

/*
 * @example ratio(2) // [2, 1]  aka 2 / 1;
 * @example ratio(1, 2) // [1, 2]  aka 1 / 2;
 */
export const ratio = (...arg: [number] | [number, number]): O.Option<Ratio> =>
    prismRatio.getOption(arg.length === 1 ? [arg[0], arg[0]] : arg)

export const Show: S.Show<Ratio> = ({
    show: (r: Ratio) => `${prismRatio.reverseGet(r)[0]} / ${prismRatio.reverseGet(r)[1]}`
})

export default Ratio;
