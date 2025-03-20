import React, { PropsWithChildren } from 'react'

export interface LayoutSideBarProps extends PropsWithChildren {
  sideBarNode: React.ReactNode
}
const LayoutSideBar: React.FC<LayoutSideBarProps> = ({ children, sideBarNode }) => {
  return (
    <div className="max-h-screen z-0 flex flex-row size-full items-stretch shrink-0">
      <main className="flex flex-col items-start shrink grow">
        <div className="h-full container-main mx-auto shrink grow flex flex-row items-stretch">
          {/* {sideBarNode && sideBarNode} */}
          <div className="flex-1 h-full backface-hidden grow shrink-0 flex items-stretch flex-col">
            <div className="w-full h-full flex flex-col shrink-0 grow items-stretch max-xl:mr-0">
              {children}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LayoutSideBar
