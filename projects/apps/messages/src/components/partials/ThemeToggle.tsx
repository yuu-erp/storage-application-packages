import classNames from 'classnames'
import { useDarkMode } from 'src/hooks/useDarkMode'
import ButtonBase from '../shared/ButtonBase'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useDarkMode()

  return (
    <ButtonBase
      onClick={toggleTheme}
      className={classNames(isDarkMode ? 'bg-white/30' : 'bg-black', 'p-2 rounded-full transition')}
    >
      {isDarkMode ? '🌞' : '🌙'}
    </ButtonBase>
  )
}

export default ThemeToggle
