import { pipe } from 'fp-ts/lib/function';
import createStyle from '.';
import { rem, px, vh } from '../Length';
import { percent } from '../Percent';

describe("Style", () => {
    describe("toCss", () => {
        const { toCss, padding, margin, gap } = createStyle();

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

        test("margin", () => {
            const top = pipe(margin("top")(px(1)), toCss);
            const bottom = pipe(margin("bottom")(rem(5)), toCss);
            const right = pipe(margin("right")(vh(2)), toCss);
            const left = pipe(margin("left")(percent(10)), toCss);

            expect(top).toEqual({ marginTop: '1px' })
            expect(bottom).toEqual({ marginBottom: '5rem' })
            expect(right).toEqual({ marginRight: '2vh' })
            expect(left).toEqual({ marginLeft: '10%' })
        })

        test("gap", () => {
            const gap1 = pipe(gap(px(1)), toCss);
            const gap2 = pipe(gap(px(1), rem(2)), toCss);

            expect(gap1).toEqual({ gap: '1px' })
            expect(gap2).toEqual({ gap: '1px 2rem' })
        })
    })
})
