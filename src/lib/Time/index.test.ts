import { sec, showSec, ms, showMs, showTime } from '.'

describe('Time', () => {
    it('Sec', () => {
        const testVal = sec(-2)
        expect(showSec.show(testVal)).toEqual('-2s')
    })

    it('Ms', () => {
        const testVal = ms(-456)
        expect(showMs.show(testVal)).toEqual('-456ms')
    })

    it('showTime', () => {
        expect(showTime.show(sec(-1))).toEqual('-1s')
        expect(showTime.show(ms(0))).toEqual('0ms')
    })

})
