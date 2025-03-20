import React from 'react'
import { IoSearch } from 'react-icons/io5'
import classNames from 'classnames'

export interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  classNameIcon?: string
  classNameContainer?: string
}

const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  ({ classNameContainer, classNameIcon, className, ...props }, ref) => {
    return (
      <div className={classNames('px-3 md:px-5 relative', classNameContainer)}>
        <IoSearch
          className={classNames(
            'absolute left-8 top-1/2 transform -translate-y-1/2 text-inherit',
            classNameIcon
          )}
          size={20}
        />
        <input
          ref={ref}
          {...props}
          type="text"
          placeholder="Search"
          className={`w-full pl-10 pr-4 py-2 rounded-[22px] bg-search text-title placeholder-gray-500 outline-none border border-color-border shadow-2 md:border-none ${className}`}
        />
      </div>
    )
  }
)

Search.displayName = 'Search'
export default React.memo(Search)
