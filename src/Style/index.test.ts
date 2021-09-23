import { pipe } from 'fp-ts/lib/function';
import createStyle from '.';
import { rem, px, vh } from '../Length';
import { percent } from '../Percent';

describe("Style", () => {
    describe("toCss", () => {
        const { toCss, padding: p, margin: m, gap } = createStyle();

        test("padding", () => {
            const top = pipe(p("top")(px(1)), toCss);
            const bottom = pipe(p("bottom")(rem(5)), toCss);
            const right = pipe(p("right")(vh(2)), toCss);
            const left = pipe(p("left")(percent(10)), toCss);

            expect(top).toEqual({ paddingTop: '1px' })
            expect(bottom).toEqual({ paddingBottom: '5rem' })
            expect(right).toEqual({ paddingRight: '2vh' })
            expect(left).toEqual({ paddingLeft: '10%' })
        })

        test("margin", () => {
            const top = pipe(m("top")(px(1)), toCss);
            const bottom = pipe(m("bottom")(rem(5)), toCss);
            const right = pipe(m("right")(vh(2)), toCss);
            const left = pipe(m("left")(percent(10)), toCss);

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
