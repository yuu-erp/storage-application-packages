import { Logger } from '../utils/Logger'

describe('Logger', () => {
  const prefix = '[TestLogger]'
  let logger: Logger

  beforeEach(() => {
    logger = new Logger(prefix)

    jest.spyOn(console, 'log').mockImplementation(() => {})
    jest.spyOn(console, 'debug').mockImplementation(() => {})
    jest.spyOn(console, 'info').mockImplementation(() => {})
    jest.spyOn(console, 'warn').mockImplementation(() => {})
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('should log debug message in dev mode', () => {
    logger.debug('debug message', { foo: 'bar' })
    expect(console.debug).toHaveBeenCalledWith(
      expect.stringMatching(/\[.*\] \[DEBUG\] \[TestLogger\]/),
      'debug message',
      { foo: 'bar' }
    )
  })

  test('should log info message in dev mode', () => {
    logger.info('info message')
    expect(console.info).toHaveBeenCalledWith(
      expect.stringMatching(/\[.*\] \[INFO\] \[TestLogger\]/),
      'info message'
    )
  })

  test('should log warn message in dev mode', () => {
    logger.warn('warn message')
    expect(console.warn).toHaveBeenCalledWith(
      expect.stringMatching(/\[.*\] \[WARN\] \[TestLogger\]/),
      'warn message'
    )
  })

  test('should log error message in dev mode', () => {
    logger.error('error message', 123)
    expect(console.error).toHaveBeenCalledWith(
      expect.stringMatching(/\[.*\] \[ERROR\] \[TestLogger\]/),
      'error message',
      123
    )
  })

  test('should log log message in dev mode', () => {
    logger.log('log message')
    expect(console.log).toHaveBeenCalledWith(
      expect.stringMatching(/\[.*\] \[LOG\] \[TestLogger\]/),
      'log message'
    )
  })

  test('should not log in production mode', () => {
    const prodLogger = new Logger(prefix)
    Object.defineProperty(prodLogger, 'isDev', { value: false }) // Fake production mode

    prodLogger.debug('should not show')
    prodLogger.info('should not show')
    prodLogger.warn('should not show')
    prodLogger.error('should not show')
    prodLogger.log('should not show')

    expect(console.debug).not.toHaveBeenCalled()
    expect(console.info).not.toHaveBeenCalled()
    expect(console.warn).not.toHaveBeenCalled()
    expect(console.error).not.toHaveBeenCalled()
    expect(console.log).not.toHaveBeenCalled()
  })
})
