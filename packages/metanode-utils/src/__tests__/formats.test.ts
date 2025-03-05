import {
  formatAddress,
  hexToHsl,
  hexToRgb,
  hslToHex,
  removeAccents,
  SEED_SECRECT,
  seedToString,
  shortString,
  strToSeed,
  truncateString
} from '../formats'

describe('Format Functions', () => {
  describe('formatAddress - Định dạng địa chỉ', () => {
    test('Định dạng địa chỉ', () => {
      expect(formatAddress('0x295ebd481ad46f96ccae4bfa0ed5c6d74c321032')).toBe(
        '0x295ebd481ad46f96ccae4bfa0ed5c6d74c321032'
      )
    })
  })

  describe('truncateString - Cắt ngắn chuỗi', () => {
    test('Chuỗi ngắn hơn hoặc bằng 2 * length không bị cắt', () => {
      expect(truncateString('short', 6)).toBe('short')
      expect(truncateString('abcdefgh', 4)).toBe('abcdefgh')
      expect(truncateString('', 6)).toBe('') // Chuỗi rỗng
    })

    test('Cắt chuỗi ở giữa (center)', () => {
      expect(truncateString('abcdefghij', 3, 'center')).toBe('abc...hij')
      expect(truncateString('longerexampletext', 5, 'center')).toBe('longe...etext')
    })

    test('Cắt chuỗi từ đầu (start)', () => {
      expect(truncateString('abcdefghij', 3, 'start')).toBe('...efghij')
      expect(truncateString('longerexampletext', 5, 'start')).toBe('...xampletext')
    })

    test('Cắt chuỗi từ cuối (end)', () => {
      expect(truncateString('abcdefghij', 3, 'end')).toBe('abcdef...')
      expect(truncateString('longerexampletext', 5, 'end')).toBe('longerexam...')
    })

    test('Sử dụng ký tự thay thế tùy chỉnh', () => {
      expect(truncateString('abcdefghij', 3, 'center', '--')).toBe('abc--hij')
      expect(truncateString('abcdefghij', 3, 'start', '***')).toBe('***efghij')
      expect(truncateString('abcdefghij', 3, 'end', '###')).toBe('abcdef###')
    })

    test('Trường hợp đặc biệt', () => {
      expect(truncateString(null as any, 3)).toBe('') // `null` -> chuỗi rỗng
      expect(truncateString(undefined as any, 3)).toBe('') // `undefined` -> chuỗi rỗng
      expect(truncateString(1234567890 as any, 3)).toBe('123...890') // Chuyển số thành chuỗi và cắt
    })
  })

  describe('shortString - Rút gọn chuỗi với dấu "..." ở giữa', () => {
    test('Chuỗi ngắn hơn hoặc bằng độ dài giới hạn không thay đổi', () => {
      expect(shortString('hello', 6)).toBe('hello')
      expect(shortString('short', 5)).toBe('sh...rt')
    })

    test('Chuỗi dài hơn độ dài giới hạn sẽ bị rút gọn', () => {
      expect(shortString('abcdefghij', 6)).toBe('abc...hij')
      expect(shortString('longtextsample', 8)).toBe('long...mple')
    })

    test('Chuỗi có độ dài lẻ vẫn được xử lý đúng', () => {
      expect(shortString('abcdefg', 7)).toBe('abc...efg')
    })

    test('Chuỗi rỗng trả về rỗng', () => {
      expect(shortString('', 6)).toBe('')
    })

    test('Độ dài giới hạn là 1 vẫn hoạt động', () => {
      expect(shortString('abcdef', 1)).toBe('...abcdef')
    })

    test('Độ dài giới hạn bằng 0 hoặc nhỏ hơn', () => {
      expect(shortString('abcdef', 0)).toBe('...abcdef')
      expect(shortString('abcdef', -1)).toBe('abcde...bcdef')
    })

    test('Độ dài giới hạn lớn hơn chiều dài chuỗi', () => {
      expect(shortString('abcdef', 10)).toBe('abcdef')
    })
  })

  describe('removeAccents - Kiểm tra hàm loại bỏ dấu tiếng Việt', () => {
    it('Loại bỏ dấu trong chuỗi có ký tự tiếng Việt', () => {
      expect(removeAccents('Hòa Bình')).toBe('Hoa Binh')
      expect(removeAccents('Công nghệ')).toBe('Cong nghe')
      expect(removeAccents('điện thoại')).toBe('dien thoai')
      expect(removeAccents('Thể thao')).toBe('The thao')
    })

    it('Giữ nguyên chuỗi không có dấu', () => {
      expect(removeAccents('Hello')).toBe('Hello')
      expect(removeAccents('123456')).toBe('123456')
      expect(removeAccents('!@#$%^&*()')).toBe('!@#$%^&*()')
    })

    it('Trả về chuỗi rỗng nếu đầu vào là rỗng', () => {
      expect(removeAccents('')).toBe('')
    })

    it('Xử lý chính xác chuỗi chỉ chứa ký tự có dấu', () => {
      expect(removeAccents('ắặâầểễếệ')).toBe('aaaaeeee')
      expect(removeAccents('ỳỷỹýỵ')).toBe('yyyyy')
    })
  })

  describe('Hàm seedToString', () => {
    test('Trả về lỗi nếu danh sách không có đúng 24 phần tử', () => {
      expect(() => seedToString([])).toThrow('Invalid list seed')
      expect(() => seedToString(['word'])).toThrow('Invalid list seed')
      expect(() => seedToString(Array(23).fill('test'))).toThrow('Invalid list seed')
      expect(() => seedToString(Array(25).fill('test'))).toThrow('Invalid list seed')
    })

    test('Chuyển đổi danh sách 24 chuỗi đúng định dạng', () => {
      const input = Array(24).fill('a') // Danh sách 24 chuỗi có độ dài 1
      const output = `${SEED_SECRECT}${input.map((word) => `A${word}`).join('')}`
      expect(seedToString(input)).toBe(output)
    })

    test('Xử lý danh sách có độ dài khác nhau', () => {
      const input = [
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
      ] // Đủ 24 phần tử
      const expectedPrefix = `${SEED_SECRECT}`
      const expectedSuffix =
        'AaBbbCcccDddddEeeeeeFffffffGgggggggHhhhhhhhhIiiiiiiiiiJjjjjjjjjjjKkkkkkkkkkkkLllllllllllllMmmmmmmmmmmmmmNnnnnnnnnnnnnnnOoooooooooooooooPppppppppppppppppQqqqqqqqqqqqqqqqqqRrrrrrrrrrrrrrrrrrrSsssssssssssssssssssTttttttttttttttttttttUuuuuuuuuuuuuuuuuuuuuuXvvvvvvvvvvvvvvvvvvvvvvvvCwwwDxxxx'
      expect(seedToString(input)).toBe(expectedPrefix + expectedSuffix)
    })
  })

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
})
