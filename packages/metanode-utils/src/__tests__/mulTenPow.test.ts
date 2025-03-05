import { mulTenPow } from '../handle'

describe('mulTenPow', () => {
  test('Nhân với số mũ dương', () => {
    expect(mulTenPow(123.45, 2)).toBe('12345')
    expect(mulTenPow('0.0123', 3)).toBe('12.3')
    expect(mulTenPow('100', 2)).toBe('10000')
    expect(mulTenPow('1.5', 3)).toBe('1500')
  })

  test('Nhân với số mũ âm', () => {
    expect(mulTenPow('100', -2)).toBe('1')
    expect(mulTenPow(456, -3)).toBe('0.456')
    expect(mulTenPow('120', -1)).toBe('12')
    expect(mulTenPow('1234', -3)).toBe('1.234')
  })

  test('Không thay đổi khi số mũ là 0', () => {
    expect(mulTenPow('123', 0)).toBe('123')
    expect(mulTenPow(0.456, 0)).toBe('0.456')
  })

  test('Xử lý số 0', () => {
    expect(mulTenPow('0', 5)).toBe('0')
    expect(mulTenPow('0', -5)).toBe('0')
  })

  test('Xử lý undefined hoặc giá trị không hợp lệ', () => {
    expect(mulTenPow(undefined, 3)).toBe('')
  })
})
