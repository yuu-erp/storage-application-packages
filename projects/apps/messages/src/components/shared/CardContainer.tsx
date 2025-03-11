import React, { ReactNode } from 'react'

type CardContainerProps = {
  children: ReactNode
  className?: string
}

const CardContainer: React.FC<CardContainerProps> = ({ children, className }) => {
  return <div className={`${className} w-full max-w-[500px] p-5 sm:p-6 sm:px-7`}>{children}</div>
}

export default CardContainer
