import { pipe } from 'fp-ts/lib/function';
import createStyle from '.';
import { rem, px, vh } from '../Length';
import { percent } from '../Percent';

describe("Style", () => {
    describe("toCss", () => {
        const { toCss, padding } = createStyle();

        test("padding", () => {
            const top = pipe(padding("top")(px(1)), toCss);
            const bottom = pipe(padding("bottom")(rem(5)), toCss);
            const right = pipe(padding("right")(vh(2)), toCss);
            const left = pipe(padding("left")(percent(10)), toCss);

            expect(top).toEqual({ paddingTop: '1px' })
            expect(bottom).toEqual({ paddingBottom: '5rem' })
            expect(right).toEqual({ paddingRight: '2vh' })
            expect(left).toEqual({ paddingLeft: '10%' })
        })
    })
})
