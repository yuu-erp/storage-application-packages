import React, { useCallback, useMemo, useRef, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { HiMiniUserGroup } from 'react-icons/hi2'
import { LuSmilePlus } from 'react-icons/lu'
import classNames from 'classnames'
import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'
import EmojiPicker, { EmojiClickData, Theme } from 'emoji-picker-react'
import BubbleLeft from 'src/components/shared/BubbleLeft'
import BubbleRight from 'src/components/shared/BubbleRight'
import ButtonBase from 'src/components/shared/ButtonBase'
import { Dialog, DialogContent } from 'src/components/shared/Dialog'
import Image from 'src/components/shared/Image'
import { Popover, PopoverContent, PopoverTrigger } from 'src/components/shared/Popover'
import { useDarkMode } from 'src/hooks/useDarkMode'
import useResponsive from 'src/hooks/useResponsive'
import { MessageType } from 'src/types/enum'
import OptionsPopup from './OptionPopup'

interface MessageItemProps {
  isSameOwner: boolean
  isLastOfGroup: boolean
  message: Message
  handleOpenForward: () => void
}

const MessageItem: React.FC<MessageItemProps> = ({
  message,
  isSameOwner,
  isLastOfGroup,
  handleOpenForward
}) => {
  const touchRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isHoldingRef = useRef<boolean>(false)

  const [showOptions, setShowOptions] = useState<boolean>(false)
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false)
  const [reactionOpen, setReactionOpen] = useState<boolean>(false)
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)

  const { isDarkMode } = useDarkMode()
  const mdDown = useResponsive('down', 'md')
  const owned = useMemo(() => message.sender === 1, [message.sender])

  const handleStart = useCallback(() => {
    isHoldingRef.current = true
    timeoutRef.current = setTimeout(() => {
      if (isHoldingRef.current) setDialogOpen(true)
    }, 500)
  }, [])

  const handleEnd = useCallback(() => {
    isHoldingRef.current = false
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setShowOptions(false)
    if (!popoverOpen) setPopoverOpen(false)
    if (!reactionOpen) setReactionOpen(false)
  }, [popoverOpen, reactionOpen])

  const handleReactionClick = useCallback((reaction: EmojiClickData) => {
    console.log({ reaction })
    setReactionOpen(false)
  }, [])

  const MessageLine = ({ showAvatar }: { showAvatar?: boolean }) => (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseMove={() => setShowOptions(true)}
      className={classNames('w-full flex items-end relative gap-3 md:gap-4', {
        'justify-end': owned,
        'justify-start': !owned,
        'mt-[6px]': isSameOwner,
        'mt-4': !isSameOwner
      })}
    >
      {!owned && (
        <Image
          loading="lazy"
          src={message.avatar}
          alt="avatar"
          containerClassName={classNames('size-10 md:size-12 rounded-full shrink-0', {
            'opacity-100': isLastOfGroup || showAvatar,
            'opacity-0': !isLastOfGroup
          })}
          className="size-full object-cover object-center"
        />
      )}
      <div
        className={classNames(
          owned && 'mr-2 ml-12 md:ml-0',
          !owned && 'mr-5 md:mr-0',
          message.type === MessageType.file
            ? 'max-w-xs'
            : 'max-w-xs sm:max-w-sm md:max-w-[400px] xl:max-w-[420px]',
          'relative group w-fit'
        )}
        ref={touchRef}
        onTouchStart={handleStart}
        onTouchEnd={handleEnd}
        onTouchMove={handleEnd}
      >
        {message.image && (
          <Image
            loading="lazy"
            src={message.image}
            alt={message.time}
            containerClassName={classNames(
              message.type === MessageType.sticker && 'max-w-[120px] md:max-w-[180px]',
              'w-full h-auto rounded-xl md:rounded-3xl'
            )}
            className="size-full object-contain object-center"
          />
        )}
        {message.text && (
          <div
            className={classNames(
              'relative p-3 md:p-4 py-3 rounded-3xl bg-body flex items-center gap-2 md:gap-3 w-fit text-[14px]/[20px] md:text-[15px]/[20px]',
              {
                'rounded-bl-none': !owned && (isLastOfGroup || showAvatar),
                'rounded-br-none': owned && (isLastOfGroup || showAvatar),
                'font-medium ': message.type === MessageType.file
              }
            )}
          >
            {message.type === MessageType.file && (
              <img
                alt="file"
                src="https://s3-alpha-sig.figma.com/img/d6a1/f1d3/b22903ca6703eb7a3e395e46da3bacac?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TNZKeAJ7wcVvMnG0AXbdrOzI~aG9olChuQvmMLt55BaBxiWMW40J27ALUAq-iBHDLreiiDR6A-s1g6ZTyJvcGPt9nNE9paIvOKnLi2TSZjFrjGUxceHlYt0MZc7n4f-poYmZZqmBVxSA3BHPJiOGALGeyyxgoEapfZXym5Iu2AtXWKbfJBsfdUJKIjUrUrdKbyUtzVlEYqwgXZHokxN4hcFkWFyDMKF8e6s2exi59lHIjhJDs8RpcrlqmInuqaXZi-nytsN4ot-zpU1baV2wlqMvQYzzsJFggUj8PMPzzoiUj8i7RJHOpV~FM1T4ugznJDip4Stva-~6wsti9-e~UA__"
                className="size-12 rounded-xl"
              />
            )}
            <div className="flex flex-1 flex-col gap-1 text-main">
              <p>{message.text}</p>
              {message.type === MessageType.file && (
                <span className="text-xs md:text-sm text-sub-title">Note</span>
              )}
            </div>
            {message.type === MessageType.file && (
              <button className="size-12 hidden sm:flex items-center justify-center shrink-0 rounded-full bg-message-list md:bg-button">
                <HiMiniUserGroup className="size-6" />
              </button>
            )}
            {message.reacts && message.reacts.length > 0 ? (
              <div className="absolute bottom-0.5 translate-y-2/3 right-4 py-1 px-0.5 flex items-center text-sm leading-none bg-body md:backdrop-blur-sm rounded-full border-[3px] border-message-list md:border-none">
                {message.reacts.slice(0, 3).map((react, i) => (
                  <span key={i}>{react}</span>
                ))}
              </div>
            ) : null}
            {(isLastOfGroup || showAvatar) &&
              (message.type === MessageType.file || message.type === MessageType.text) &&
              (!owned ? (
                <BubbleLeft isDarkMode={isDarkMode} />
              ) : (
                <BubbleRight isDarkMode={isDarkMode} />
              ))}
          </div>
        )}

        {showOptions && (
          <div
            className={classNames(
              'absolute top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1',
              {
                '-left-[30px] md:-left-[60px]': owned,
                '-right-[30px] md:-right-[60px]': !owned
              }
            )}
          >
            <Popover open={reactionOpen} onOpenChange={setReactionOpen}>
              <PopoverTrigger asChild>
                <ButtonBase className="size-6 hover:bg-white/30 rounded-full">
                  <LuSmilePlus className="size-[18px]" />
                </ButtonBase>
              </PopoverTrigger>
              <PopoverContent align="center" side="top">
                <EmojiPicker
                  reactionsDefaultOpen
                  theme={Theme.LIGHT}
                  onReactionClick={handleReactionClick}
                  onEmojiClick={handleReactionClick}
                />
              </PopoverContent>
            </Popover>
            <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
              <PopoverTrigger asChild>
                <ButtonBase className="size-6 hover:bg-white/30 rounded-full">
                  <BsThreeDotsVertical className="size-[18px]" />
                </ButtonBase>
              </PopoverTrigger>
              <PopoverContent align="center" side="top">
                <OptionsPopup handleOpenForward={handleOpenForward} />
                <div className="mt-1 p-1 px-2 rounded-lg bg-body md:bg-popover backdrop-blur-2xl overflow-hidden text-sm font-medium sha">
                  {format(message.time, "'To day at' hh:mm a", {
                    locale: enUS
                  })}
                </div>
              </PopoverContent>
            </Popover>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <>
      <MessageLine />
      {mdDown && (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent hideClose className="rounded-none size-full border-none">
            <div
              onClick={() => {
                isHoldingRef.current = false
                setDialogOpen(false)
              }}
              className={classNames(
                owned ? 'items-end' : 'items-start',
                'size-full flex flex-col  justify-center gap-5 bg-blur'
              )}
            >
              <EmojiPicker
                autoFocusSearch={false}
                reactionsDefaultOpen
                theme={Theme.LIGHT}
                onReactionClick={handleReactionClick}
                onEmojiClick={handleReactionClick}
              />
              <div
                className={classNames(
                  dialogOpen ? 'block animate-[scaleIn_500ms_ease-out]' : 'hidden',
                  owned ? 'origin-right' : 'origin-left'
                )}
              >
                <MessageLine showAvatar />
              </div>
              <div>
                <OptionsPopup handleOpenForward={handleOpenForward} />
                <div className="mt-1 p-1 px-2 rounded-lg bg-body md:bg-popover backdrop-blur-2xl overflow-hidden text-sm font-medium shadow-1">
                  {format(message.time, "'To day at' hh:mm a", {
                    locale: enUS
                  })}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}

export default React.memo(MessageItem)
