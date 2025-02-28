import { formatAddress } from '../formats'

describe('Format Functions', () => {
  test('should format addresses', () => {
    expect(formatAddress('0x295ebd481ad46f96ccae4bfa0ed5c6d74c321032')).toBe(
      '0x295ebd481ad46f96ccae4bfa0ed5c6d74c321032'
    )
  })
})
