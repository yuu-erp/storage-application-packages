import { convertExponentialToDecimal } from '../handle'

describe('convertExponentialToDecimal', () => {
  test('Chuyển đổi số không có exponent', () => {
    expect(convertExponentialToDecimal(12345)).toBe('12345')
    expect(convertExponentialToDecimal('67890')).toBe('67890')
  })

  test('Chuyển đổi số mũ dương', () => {
    expect(convertExponentialToDecimal(1.23e5)).toBe('123000')
    expect(convertExponentialToDecimal('4.56e3')).toBe('4560')
  })

  test('Chuyển đổi số mũ âm', () => {
    expect(convertExponentialToDecimal(1.23e-3)).toBe('0.00123')
    expect(convertExponentialToDecimal('5.678e-4')).toBe('0.0005678')
  })

  test('Chuyển đổi số mũ với dấu âm', () => {
    expect(convertExponentialToDecimal(-2.5e2)).toBe('-250')
    expect(convertExponentialToDecimal('-3.14e-2')).toBe('-0.0314')
  })

  test('Chuyển đổi số nguyên có exponent', () => {
    expect(convertExponentialToDecimal(2e3)).toBe('2000')
    expect(convertExponentialToDecimal('-7e2')).toBe('-700')
  })

  test('Số 0 với exponent', () => {
    expect(convertExponentialToDecimal(0e5)).toBe('0')
    expect(convertExponentialToDecimal('-0e3')).toBe('0')
  })
})
