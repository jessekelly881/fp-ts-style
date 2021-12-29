import * as S from 'fp-ts/Show';

type Ratio = [number, number] // Both numbers should be positive

export default Ratio;

/*
 * @example ratio(2) // [2, 1]  aka 2 / 1;
 * @example ratio(1, 2) // [1, 2]  aka 1 / 2;
 */
export const ratio = (...arg: [number] | [number, number]): [number, number] =>
    arg.length === 1 ? [arg[0], arg[0]] : arg;

export const Show: S.Show<Ratio> = ({
    show: (r: Ratio) => `${r[0]} / ${r[1]}`
})
