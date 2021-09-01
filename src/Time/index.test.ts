import { sec, showSec, ms, showMs } from '.'

describe('Time', () => {
    it('Sec', () => {
        const testVal = sec(-2)
        expect(showSec.show(testVal)).toEqual('-2s')
    })

    it('Ms', () => {
        const testVal = ms(-456)
        expect(showMs.show(testVal)).toEqual('-456ms')
    })
})
