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

            expect(toCss({ padding } as Style)).toEqual({
                paddingRight: '1rem',
                paddingLeft: '1px',
                paddingTop: '1vh',
                paddingBottom: '1em'
            })
        })


        test("margin", () => {
            const margin: Style["margin"] = {
                right: rem(1),
                left: px(1),
                top: vh(1),
                bottom: em(1),
            }

            expect(toCss({ margin } as Style)).toEqual({
                marginRight: '1rem',
                marginLeft: '1px',
                marginTop: '1vh',
                marginBottom: '1em'
            })
        })
    })
})
