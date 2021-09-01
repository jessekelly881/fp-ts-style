import { deg, showDeg, rad, showRad, grad, showGrad, turn, showTurn } from '.'

describe('Angle', () => {
    it('Deg', () => {
        const testVal = deg(2)
        expect(showDeg.show(testVal)).toBe('2deg')
    })

    it('Rad', () => {
        const testVal = rad(10)
        expect(showRad.show(testVal)).toBe('10rad')
    })

    it('Grad', () => {
        const testVal = grad(-50)
        expect(showGrad.show(testVal)).toBe('-50grad')
    })

    it('Turn', () => {
        const testVal = turn(1.75)
        expect(showTurn.show(testVal)).toBe('1.75turn')
    })
})
