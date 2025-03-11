import React, { Dispatch, FC, memo, SetStateAction } from 'react'
import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'
import EmojiPicker, { Theme } from 'emoji-picker-react'
import { Popover, PopoverContent, PopoverTrigger } from 'src/components/shared/Popover'
import OptionsPopup from './OptionPopup'

interface PopoverDetailProps {
  children: React.ReactNode
  popoverOpen: boolean
  setPopoverOpen: Dispatch<SetStateAction<boolean>>
}

const PopoverDetail: FC<PopoverDetailProps> = memo(({ children, popoverOpen, setPopoverOpen }) => {
  const message = { time: new Date().getTime() }

  return (
    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent align="center" side="bottom">
        <EmojiPicker
          reactionsDefaultOpen
          theme={Theme.LIGHT}
          //   onReactionClick={handleReactionClick}
          //   onEmojiClick={handleReactionClick}
        />
      </PopoverContent>
      <PopoverContent align="center" side="top">
        <OptionsPopup />
        <div className="mt-1 p-1 px-2 rounded-lg bg-body md:bg-popover backdrop-blur-2xl overflow-hidden text-sm font-medium sha">
          {format(message.time, "'To day at' hh:mm a", {
            locale: enUS
          })}
        </div>
      </PopoverContent>
    </Popover>
  )
})

export default PopoverDetail
