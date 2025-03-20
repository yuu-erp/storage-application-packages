import { SEED_SECRECT, strToSeed } from '../formats'

describe('Hàm strToSeed', () => {
  test('Trả về lỗi nếu chuỗi không có đúng prefix', () => {
    expect(() => strToSeed('WrongPrefixAhello')).toThrow('Invalid seed string')
    expect(() => strToSeed('12345Ahello')).toThrow('Invalid seed string')
    expect(() => strToSeed('')).toThrow('Invalid seed string')
  })

  test('Chuyển đổi chuỗi hợp lệ thành mảng 24 phần tử', () => {
    const seedList = [
      'a',
      'bb',
      'ccc',
      'dddd',
      'eeeee',
      'ffffff',
      'ggggggg',
      'hhhhhhhh',
      'iiiiiiiii',
      'jjjjjjjjjj',
      'kkkkkkkkkkk',
      'llllllllllll',
      'mmmmmmmmmmmmm',
      'nnnnnnnnnnnnnn',
      'ooooooooooooooo',
      'pppppppppppppppp',
      'qqqqqqqqqqqqqqqqq',
      'rrrrrrrrrrrrrrrrrr',
      'sssssssssssssssssss',
      'tttttttttttttttttttt',
      'uuuuuuuuuuuuuuuuuuuuu',
      'vvvvvvvvvvvvvvvvvvvvvvvv',
      'www',
      'xxxx'
    ]

    // Tạo chuỗi hợp lệ dựa trên quy tắc trong seedToString
    const encodedSeed =
      SEED_SECRECT +
      seedList.map((word) => `${String.fromCharCode(64 + word.length)}${word}`).join('')

    expect(strToSeed(encodedSeed)).toEqual(seedList)
  })

  test('Trả về mảng có đúng 24 phần tử', () => {
    const seedList = Array(24).fill('test') // 24 từ 'test'
    const encodedSeed = SEED_SECRECT + seedList.map((word) => `D${word}`).join('') // 'D' -> length = 4
    expect(strToSeed(encodedSeed)).toHaveLength(24)
  })
})
