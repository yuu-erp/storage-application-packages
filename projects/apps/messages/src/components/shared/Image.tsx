import React, { useState } from 'react'
import classNames from 'classnames'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string
}

const Image: React.FC<ImageProps> = ({ containerClassName, onLoad, ...props }) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleLoad: React.ImgHTMLAttributes<HTMLImageElement>['onLoad'] = (event) => {
    setIsLoading(true)
    onLoad?.(event)
  }

  return (
    <div className={classNames('relative overflow-hidden', containerClassName)}>
      <div
        className={classNames(
          !isLoading ? 'flex' : 'hidden',
          'w-full h-full bg-gray-300 rounded-lg animate-pulse absolute inset-0'
        )}
      ></div>
      <img onLoad={handleLoad} {...props} />
    </div>
  )
}

export default React.memo(Image)
