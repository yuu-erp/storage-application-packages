import { FC, memo } from 'react'
import classNames from 'classnames'

interface MessageInListItemProps {
  msg: MessageInList
  className?: string
}

const MessageInListItem: FC<MessageInListItemProps> = memo(({ msg, className }) => {
  return (
    <div
      className={classNames(
        'flex gap-3 items-center p-3 md:px-4 md:py-2 border-t border-solid border-color-border md:border-none md:hover:rounded-[10px] md:hover:bg-[#FFFFFF4D] hover:bg-selected transition-all duration-300 ease-in-out',
        className
      )}
    >
      <div className="size-[50px] shrink-0 rounded-full md:shadow-md overflow-hidden">
        <img src={msg.img} alt={msg.name} className="size-full object-cover object-center" />
      </div>
      <div className="flex justify-between items-center gap-3">
        <div className="flex-1">
          <p className="font-semibold">{msg.name}</p>
          <p className="text-sm text-sub-title line-clamp-1">{msg.message}</p>
        </div>
        <p className="text-xs text-sub-title">{msg.time}</p>
      </div>
    </div>
  )
})

export default MessageInListItem
