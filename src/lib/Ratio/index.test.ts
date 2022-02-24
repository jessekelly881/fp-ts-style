import * as R from '.';
import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/function';


describe("Ratio", () => {
    test("ratio", () => {
        expect(R.ratio(-1)).toEqual(O.none);
        expect(R.ratio(0)).toEqual(O.none);
        expect(R.ratio(1)).toEqual(O.some([1,1]));
        expect(R.ratio(1, 2)).toEqual(O.some([1,2]));
    })

    test("Show", () => {
        const str = pipe(
            R.ratio(1,2),
            O.fold(() => "", R.Show.show)
        );

        expect(str).toEqual("1 / 2");
    })
})
