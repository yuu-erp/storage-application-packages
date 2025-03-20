import React, { PropsWithChildren } from 'react'
import BackgroundBlur from './BackgroundBlur'

export interface SectionSideBarProps extends PropsWithChildren {}
const SectionSideBar = React.forwardRef<HTMLDivElement, SectionSideBarProps>((props, ref) => {
  const { children } = props
  return (
    <div ref={ref} className="w-[100px] z-[3] items-end flex flex-col relative max-xl:hidden">
      <div className="w-full overflow-y-auto h-full px-2 flex justify-center items-center shrink-0 flex-col">
        {children}
      </div>
    </div>
  )
})

SectionSideBar.displayName = 'SectionSideBar'
export default React.memo(SectionSideBar)
