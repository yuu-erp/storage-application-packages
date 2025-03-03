import { formatAddress, removeAccents, shortString, truncateString } from '../formats'

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
})
