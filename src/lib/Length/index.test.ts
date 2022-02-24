import {
    ch,
    showCh,
    rem,
    showRem,
    em,
    showEm,
    ex,
    showEx,
    vw,
    showVw,
    vh,
    showVh,
    vmin,
    showVmin,
    vmax,
    showVmax,
    px,
    showPx,
    pt,
    showPt,
    cm,
    showCm,
    mm,
    showMm,
    inch,
    showInch,
    showLength,
    showLengthPercent
} from '.'
import { percent } from '../Percent'

describe('Length', () => {
    it('Ch', () => {
        expect(showCh.show(ch(0))).toBe('0ch')
    })

    it('Rem', () => {
        expect(showRem.show(rem(1))).toBe('1rem')
    })

    it('Em', () => {
        expect(showEm.show(em(1))).toBe('1em')
    })

    it('Ex', () => {
        expect(showEx.show(ex(1))).toBe('1ex')
    })

    it('Vw', () => {
        expect(showVw.show(vw(-1))).toBe('-1vw')
    })

    it('Vh', () => {
        expect(showVh.show(vh(-1))).toBe('-1vh')
    })

    it('Vmin', () => {
        expect(showVmin.show(vmin(-2))).toBe('-2vmin')
    })

    it('Vmax', () => {
        expect(showVmax.show(vmax(-2))).toBe('-2vmax')
    })

    it('Px', () => {
        expect(showPx.show(px(10))).toBe('10px')
    })

    it('Pt', () => {
        expect(showPt.show(pt(10))).toBe('10pt')
    })

    it('Cm', () => {
        expect(showCm.show(cm(10))).toBe('10cm')
    })

    it('Mm', () => {
        expect(showMm.show(mm(10))).toBe('10mm')
    })

    it('In', () => {
        expect(showInch.show(inch(10))).toBe('10in')
    })

    it('Length', () => {
        expect(showLength.show(rem(2))).toBe('2rem')
        expect(showLength.show(px(1))).toBe('1px')
        expect(showLength.show(em(1))).toBe('1em')
        expect(showLength.show(inch(1))).toBe('1in')
        expect(showLength.show(vw(-1))).toBe('-1vw')
    })

    it('LengthPercent', () => {
        expect(showLengthPercent.show(rem(2))).toBe('2rem')
        expect(showLengthPercent.show(px(1))).toBe('1px')
        expect(showLengthPercent.show(em(1))).toBe('1em')
        expect(showLengthPercent.show(inch(1))).toBe('1in')
        expect(showLengthPercent.show(percent(-1))).toBe('-1%')
    })
})
