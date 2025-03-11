import React from 'react'
import classNames from 'classnames'

export interface BackgroundBlurProps {
  className: string
}
const BackgroundBlur: React.FC<BackgroundBlurProps> = (props) => {
  const { className } = props
  return <div className={classNames('inset-0 w-full h-full backdrop-blur-lg', className)} />
}

export default React.memo(BackgroundBlur)
