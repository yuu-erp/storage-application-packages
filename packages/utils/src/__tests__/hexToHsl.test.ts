import { hexToHsl } from '../formats'

describe('hexToHsl', () => {
  test('Chuyển đổi #000000 thành HSL(0, 0%, 0%)', () => {
    expect(hexToHsl('#000000')).toEqual({ h: 0, s: 0, l: 0 })
  })

  test('Chuyển đổi #ffffff thành HSL(0, 0%, 100%)', () => {
    expect(hexToHsl('#ffffff')).toEqual({ h: 0, s: 0, l: 100 })
  })

  test('Chuyển đổi #ff0000 thành HSL(0, 100%, 50%)', () => {
    expect(hexToHsl('#ff0000')).toEqual({ h: 0, s: 100, l: 50 })
  })

  test('Chuyển đổi #00ff00 thành HSL(120, 100%, 50%)', () => {
    expect(hexToHsl('#00ff00')).toEqual({ h: 120, s: 100, l: 50 })
  })
})
