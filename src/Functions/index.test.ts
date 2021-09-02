import { min, getShowMin, max, getShowMax, getShowClamp, clamp } from '.';
import { rem, px, showLength, Length } from '../Length';


describe("Functions", () => {
    test("min", () => {
        const showMin = getShowMin(showLength);
        const testVal = min<Length>(rem(1), px(10));

        expect(showMin.show(testVal)).toEqual("min(1rem, 10px)")
    })

    test("max", () => {
        const showMax = getShowMax(showLength);
        const testVal = max<Length>(rem(1), px(10));

        expect(showMax.show(testVal)).toEqual("max(1rem, 10px)")
    })

    test("clamp", () => {
        const showClamp = getShowClamp(showLength);
        const testVal = clamp<Length>(px(10), rem(1.5), px(20));

        expect(showClamp.show(testVal)).toEqual("clamp(10px, 1.5rem, 20px)")
    })
})
