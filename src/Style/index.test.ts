import { toCss, Style } from '.';
import { rem, px, em, vh } from '../Length';

describe("Style", () => {
    describe("toCss", () => {

        test("padding", () => {
            const padding: Style["padding"] = {
                right: rem(1),
                left: px(1),
                top: vh(1),
                bottom: em(1),
            }

            expect(toCss({ padding })).toEqual({
                paddingRight: '1rem',
                paddingLeft: '1px',
                paddingTop: '1vh',
                paddingBottom: '1em'
            })
        })
    })
})
