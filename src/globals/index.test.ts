import { showGlobal, inherit, initial, revert, unset } from '.';

describe("Globals", () => {
    it('inherit', () => {
        expect(showGlobal.show(inherit())).toBe('inherit')
    })

    it('initial', () => {
        expect(showGlobal.show(initial())).toBe('initial')
    })

    it('revert', () => {
        expect(showGlobal.show(revert())).toBe('revert')
    })

    it('unset', () => {
        expect(showGlobal.show(unset())).toBe('unset')
    })
})
