import * as R from '.';


describe("Ratio", () => {
    test("ratio", () => {
        expect(R.Show.show(R.ratio(1))).toEqual("1 / 1");
        expect(R.Show.show(R.ratio(1, 2))).toEqual("1 / 2");
    })
})
