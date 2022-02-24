import { margin, padding, gap, width, height, style, borderWidth } from '.'
import { px } from './Length'

describe('Style', () => {
    it('padding', () => {
        expect(padding('x')(px(1))).toEqual({ padding: { left: px(1), right: px(1) } })
        expect(padding('y')(px(1))).toEqual({ padding: { top: px(1), bottom: px(1) } })
    })
    it('margin', () => {
        expect(margin('x')(px(1))).toEqual({ margin : { left: px(1), right: px(1) } })
        expect(margin('y')(px(1))).toEqual({ margin: { top: px(1), bottom: px(1) } })
    })

    it('gap', () => {
        expect(gap('x')(px(1))).toEqual({ gap : { left: px(1), right: px(1) } })
        expect(gap('y')(px(1))).toEqual({ gap: { top: px(1), bottom: px(1) } })
    })

    it('width', () => {
        expect(width(px(1))).toEqual({ width: px(1) })
    })

    it('height', () => {
        expect(height(px(1))).toEqual({ height: px(1) })
    })

    it('style', () => {
        const s = style(
            gap('x')(px(1)),
            gap('right')(px(2)),
            width(px(1)),
            width(px(2)),
            borderWidth("top")("thin")
        )

        expect(s).toEqual({
            gap : { left: px(1), right: px(2) },
            width: px(2),
            borderWidth: { top: "thin" }
        })
    })
})
