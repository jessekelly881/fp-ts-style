import { toCss } from '.';
import { rem } from '../Length';

describe("Style", () => {
    describe("toCss", () => {

        test("padding", () => {
            expect(toCss({ padding: { right: rem(1) } })).toEqual({"paddingRight": "1rem"})
        })

    })
})
