import { setSides } from '.'

describe('sides', () => {
    it('setSides', () => {
        expect(setSides()(1)).toEqual({ top: 1, bottom: 1, right: 1, left: 1 })
        expect(setSides('x')(1)).toEqual({ right: 1, left: 1 })
        expect(setSides('y')(1)).toEqual({ top: 1, bottom: 1 })
        expect(setSides('bottom')(1)).toEqual({ bottom: 1 })
        expect(setSides('top')(1)).toEqual({ top: 1 })
        expect(setSides('left')(1)).toEqual({ left: 1 })
        expect(setSides('right')(1)).toEqual({ right: 1 })
    })
})
