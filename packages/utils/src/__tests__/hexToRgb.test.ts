import { hexToRgb } from '../formats'

describe('hexToRgb', () => {
  test('Chuyển đổi mã màu hex #FFFFFF thành rgb(255, 255, 255)', () => {
    expect(hexToRgb('#FFFFFF')).toBe('rgb(255, 255, 255)')
  })

  test('Chuyển đổi mã màu hex #000000 thành rgb(0, 0, 0)', () => {
    expect(hexToRgb('#000000')).toBe('rgb(0, 0, 0)')
  })

  test('Chuyển đổi mã màu hex #FF5733 thành rgb(255, 87, 51)', () => {
    expect(hexToRgb('#FF5733')).toBe('rgb(255, 87, 51)')
  })

  test('Chuyển đổi mã màu hex không có dấu # (FF5733) thành rgb(255, 87, 51)', () => {
    expect(hexToRgb('FF5733')).toBe('rgb(255, 87, 51)')
  })

  test('Chuyển đổi mã màu hex chữ thường (#ff5733) thành rgb(255, 87, 51)', () => {
    expect(hexToRgb('#ff5733')).toBe('rgb(255, 87, 51)')
  })

  test('Chuyển đổi mã màu hex #00FF00 thành rgb(0, 255, 0)', () => {
    expect(hexToRgb('#00FF00')).toBe('rgb(0, 255, 0)')
  })
})
