import { showPercent, percent } from '.'

describe('Percent', () => {
    it('Percent', () => {
        expect(showPercent.show(percent(0))).toBe('0%')
    })
})
