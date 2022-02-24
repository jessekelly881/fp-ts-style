import { deg, showDeg, rad, showRad, grad, showGrad, turn, showTurn, showAngle } from '.'

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

    it('showAngle', () => {
        expect(showAngle.show(deg(1))).toBe('1deg')
        expect(showAngle.show(rad(1))).toBe('1rad')
        expect(showAngle.show(turn(1))).toBe('1turn')
    })
})
