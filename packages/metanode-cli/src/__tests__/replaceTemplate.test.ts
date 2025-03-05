import { replaceTemplate, Variable } from '../utils/replaceTemplate'

describe('replaceTemplate', () => {
  test('Thay thế biến trong template', () => {
    const template = 'Hello, {name}! Welcome to {place}.'
    const variables: Variable[] = [
      { replacer: '{name}', value: 'John' },
      { replacer: '{place}', value: 'Earth' }
    ]

    const result = replaceTemplate(template, variables)

    expect(result).toBe('Hello, John! Welcome to Earth.')
  })

  test('Không thay đổi template nếu không có biến thay thế', () => {
    const template = 'No replacements here.'
    const variables: Variable[] = []

    const result = replaceTemplate(template, variables)

    expect(result).toBe('No replacements here.')
  })

  test('Thay thế nhiều lần nếu có nhiều biến giống nhau', () => {
    const template = '{greeting}, {name}! {greeting} again, {name}!'
    const variables: Variable[] = [
      { replacer: '{greeting}', value: 'Hello' },
      { replacer: '{name}', value: 'Alice' }
    ]

    const result = replaceTemplate(template, variables)

    expect(result).toBe('Hello, Alice! Hello again, Alice!')
  })

  test('Thay thế với giá trị số', () => {
    const template = 'The answer is {number}.'
    const variables: Variable[] = [{ replacer: '{number}', value: 42 }]

    const result = replaceTemplate(template, variables)

    expect(result).toBe('The answer is 42.')
  })

  test('Thay thế với giá trị boolean', () => {
    const template = 'Feature enabled: {enabled}.'
    const variables: Variable[] = [{ replacer: '{enabled}', value: true }]

    const result = replaceTemplate(template, variables)

    expect(result).toBe('Feature enabled: true.')
  })

  test('Thay thế với giá trị object (convert thành JSON)', () => {
    const template = 'User: {user}.'
    const variables: Variable[] = [{ replacer: '{user}', value: { name: 'Bob', age: 30 } }]

    const result = replaceTemplate(template, variables)

    expect(result).toBe('User: {"name":"Bob","age":30}.')
  })
})
