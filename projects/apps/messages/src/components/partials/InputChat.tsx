import { FC, memo, useCallback, useRef, useState } from 'react'
import { ImAttachment } from 'react-icons/im'
import { IoIosSend } from 'react-icons/io'
import { LuMic } from 'react-icons/lu'
import { TbSticker } from 'react-icons/tb'
import classNames from 'classnames'
import EmojiPicker, { Theme } from 'emoji-picker-react'
import ButtonBase from '../shared/ButtonBase'
import { Popover, PopoverContent, PopoverTrigger } from '../shared/Popover'

interface InputChatProps {
  className?: string
}

const InputChat: FC<InputChatProps> = memo(({ className }) => {
  const [message, setMessage] = useState<string>('')
  const inputRef = useRef<HTMLDivElement>(null)

  const handleChange = useCallback((e: React.ChangeEvent<HTMLDivElement>) => {
    setMessage(e.currentTarget.innerText || '')
  }, [])

  const handleSelectEmoji = useCallback(({ emoji }) => {
    setMessage((prev) => prev + emoji)
    inputRef.current?.focus() // Focus lại input sau khi chọn emoji
  }, [])

  const sendMessage = useCallback(() => {
    if (!message.trim()) return
    console.log('Sent:', message)
    setMessage('')
    if (inputRef.current) {
      inputRef.current.innerText = ''
      inputRef.current?.focus() // Focus lại input sau khi gửi
    }
  }, [message])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        sendMessage()
      }
    },
    [sendMessage]
  )

  return (
    <div
      className={classNames(
        'w-full max-w-2xl border-t border-solid border-color-border md:border-none box-border',
        className
      )}
    >
      <div className="flex w-full items-end gap-2 md:gap-3 pl-2 p-3 bg-body dark:bg-white/10 md:bg-white/10 md:dark:bg-back/10 md:backdrop-blur-[100px] md:rounded-[30px]">
        <ButtonBase
          className={classNames(
            message.length < 70 && 'mb-1',
            'size-11 shrink-0 bg-white/30 rounded-full'
          )}
        >
          <ImAttachment className="size-4 md:size-5" />
        </ButtonBase>
        <div className="relative h-full flex-1 py-2 flex items-end bg-black/10 dark:bg-black/30 shadow-2 rounded-[20px] pr-2">
          <div
            contentEditable
            ref={inputRef}
            data-placeholder="iMessage"
            className={classNames(
              !message && 'empty-content',
              message.length < 55 && 'pt-1',
              'flex-1 max-h-[120px] overflow-y-auto pl-5 w-full bg-transparent appearance-none focus:outline-none leading-7 h-full hidden-scroll'
            )}
            onInput={handleChange}
            onKeyDown={handleKeyDown}
          />
          <div className={classNames(!message ? '-mr-2' : 'mr-0', 'flex items-center gap-2')}>
            <Popover>
              <PopoverTrigger asChild>
                <ButtonBase className="hidden md:flex size-8 md:size-9 shrink-0 bg-white/60 md:bg-white/30 backdrop-blur-sm rounded-full">
                  <TbSticker className="size-5 md:size-6" />
                </ButtonBase>
              </PopoverTrigger>
              <PopoverContent sideOffset={16} align="end">
                <EmojiPicker theme={Theme.LIGHT} onEmojiClick={handleSelectEmoji} />
              </PopoverContent>
            </Popover>
            <ButtonBase className="size-8 md:size-9 shrink-0 bg-white/60 md:bg-white/30 backdrop-blur-sm rounded-full">
              <LuMic className="size-4 md:size-5" />
            </ButtonBase>
            <ButtonBase
              onClick={sendMessage}
              className={classNames(
                message ? 'size-8 md:size-9' : 'size-0',
                'shrink-0 bg-white/60 md:bg-white/30 backdrop-blur-sm rounded-full transition-all ease-in-out duration-200'
              )}
            >
              <IoIosSend className="size-5 md:size-6" />
            </ButtonBase>
          </div>
        </div>
      </div>
    </div>
  )
})

export default InputChat
