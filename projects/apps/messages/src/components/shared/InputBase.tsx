import React from 'react'
import classNames from 'classnames'

interface Icon {
  className?: string
}

export interface InputBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string
  containerInputClassName?: string
  labelClassName?: string
  LeftIcon?: React.ComponentType<Icon>
  RightIcon?: React.ComponentType<Icon>
  label?: string
  iconClassName?: string
}

const InputBase = React.forwardRef<HTMLInputElement, InputBaseProps>((props, ref) => {
  const {
    label,
    containerClassName,
    containerInputClassName,
    labelClassName,
    LeftIcon,
    RightIcon,
    className,
    iconClassName,
    ...inputProps
  } = props

  return (
    <div className={containerClassName}>
      {label && <p className={classNames('mb-2 font-semibold', labelClassName)}>{label}</p>}

      <div
        onClick={focus}
        className={classNames(
          'flex items-center space-x-2 rounded',
          LeftIcon || RightIcon ? 'px-3 py-2' : 'py-1',
          containerInputClassName
        )}
      >
        {LeftIcon && <LeftIcon className={classNames('w-6 h-6', iconClassName)} />}

        <input
          ref={ref}
          className={classNames(
            'bg-transparent appearance-none w-full focus:outline-none leading-tight h-full',
            className
          )}
          {...inputProps}
        />

        {RightIcon && <RightIcon className={classNames('w-6 h-6', iconClassName)} />}
      </div>
    </div>
  )
})

InputBase.displayName = 'InputBase'

export default React.memo(InputBase)
