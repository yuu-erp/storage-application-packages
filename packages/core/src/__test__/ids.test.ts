import { generateRandomString } from '../utils/ids'

describe('IDs Function', () => {
  test('nên tạo ra một chuỗi có độ dài được chỉ định', () => {
    const length = 10
    const randomString = generateRandomString(length)

    expect(randomString).toHaveLength(length)
    expect(randomString).toMatch(/^[A-Za-z0-9]+$/)
  })
})
