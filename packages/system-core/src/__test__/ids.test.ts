import { generateRandomString } from '../utils/ids'

describe('IDs Function', () => {
  test('should generate a string of the specified length', () => {
    const length = 10
    const randomString = generateRandomString(length)

    expect(randomString).toHaveLength(length)
    expect(randomString).toMatch(/^[A-Za-z0-9]+$/)
  })
})
