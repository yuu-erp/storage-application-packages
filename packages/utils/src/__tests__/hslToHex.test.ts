import { hslToHex } from '../formats'

describe('hslToHex', () => {
  test('Chuyển đổi HSL(0, 0%, 0%) thành #000000', () => {
    expect(hslToHex(0, 0, 0)).toBe('#000000')
  })

  test('Chuyển đổi HSL(0, 0%, 100%) thành #ffffff', () => {
    expect(hslToHex(0, 0, 100)).toBe('#ffffff')
  })

  test('Chuyển đổi HSL(0, 100%, 50%) thành #ff0000', () => {
    expect(hslToHex(0, 100, 50)).toBe('#ff0000')
  })

  test('Chuyển đổi HSL(120, 100%, 50%) thành #00ff00', () => {
    expect(hslToHex(120, 100, 50)).toBe('#00ff00')
  })
})
