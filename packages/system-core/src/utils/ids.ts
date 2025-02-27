/**
 * Generates a random alphanumeric string of the specified length.
 *
 * @param {number} length - The desired length of the generated string.
 * @returns {string} A randomly generated string consisting of uppercase letters, lowercase letters, and digits.
 * @throws {Error} If the length is not a positive integer.
 */
export function generateRandomString(length: number): string {
  if (!Number.isInteger(length) || length <= 0) {
    throw new Error('Length must be a positive integer.')
  }

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  let result = Array.from({ length }, () =>
    characters.charAt(Math.floor(Math.random() * charactersLength))
  ).join('')

  return result
}
