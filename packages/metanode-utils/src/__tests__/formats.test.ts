import { formatAddress } from '../formats'

describe('Format Functions', () => {
  test('should format addresses', () => {
    expect(formatAddress('0x742D35Cc6634C0532925A3B844Bc454E4438F44E')).toBe(
      '0x742d35cc6634c0532925a3b844bc454e4438f44e'
    )
  })
})
