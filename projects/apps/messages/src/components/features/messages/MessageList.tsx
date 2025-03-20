import { memo, useCallback, useState } from 'react'
import { Dialog, DialogContent } from 'src/components/shared/Dialog'
import { useInfiniteScroll } from 'src/hooks/useInfiniteScroll'
import { messagesOnChat as initialMessages } from 'src/mocks/data'
import ForwardDialog from '../forward/ForwardDialog'
import MessageItem from './MessageItem'

const suggestMessage = ['Yea sure', 'I’m in', 'Sounds good']

const MessageList = memo(() => {
  const [openForward, setOpenForwrad] = useState<boolean>(false)
  const [messages, setMessages] = useState(initialMessages.slice(-20))
  const [hasMore, setHasMore] = useState(initialMessages.length > 20)

  const handleOpenForward = useCallback(() => {
    setOpenForwrad(true)
  }, [])

  const loadMoreMessages = useCallback(() => {
    if (!hasMore) return
    const currentLength = messages.length
    const moreMessages = initialMessages.slice(
      Math.max(0, initialMessages.length - currentLength - 20),
      initialMessages.length - currentLength
    )

    setMessages((prev) => [...moreMessages, ...prev])
    setHasMore(moreMessages.length > 0)
  }, [hasMore, messages.length])

  const { triggerRef } = useInfiniteScroll({
    fetchMore: loadMoreMessages,
    hasMore
  })

  return (
    <>
      <div className="p-4 md:px-10 pb-4 pt-20 flex-1 flex flex-col-reverse overflow-y-auto hidden-scroll">
        <div className="mt-5 flex items-center gap-2 snap-x ml-auto snap-mandatory overflow-x-auto min-h-[40px]">
          {suggestMessage.map((sug) => (
            <div
              key={sug}
              className="py-2 px-5 text-sm md:text-base text-nowrap rounded-full bg-body md:bg-button md:backdrop-blur-2xl font-medium shadow-sm snap-start"
            >
              {sug}
            </div>
          ))}
        </div>

        {messages.length > 0 ? (
          <div>
            {hasMore && (
              <div ref={triggerRef} className="text-center text-gray-500 py-2">
                Loading more...
              </div>
            )}
            {messages.map((message, index) => {
              const prevMessage = messages[index - 1]
              const nextMessage = messages[index + 1]
              const isSameOwner = prevMessage?.sender === message.sender
              const isLastOfGroup = nextMessage?.sender !== message.sender

              return (
                <MessageItem
                  key={message.time + index}
                  isSameOwner={isSameOwner}
                  isLastOfGroup={isLastOfGroup}
                  message={message}
                  handleOpenForward={handleOpenForward}
                />
              )
            })}
          </div>
        ) : (
          <h3 className="pt-4 font-medium text-center">No messages</h3>
        )}
      </div>

      <Dialog open={openForward} onOpenChange={setOpenForwrad}>
        <DialogContent hideClose className="border-none !w-fit !p-0">
          <ForwardDialog setOpenForwrad={setOpenForwrad} />
        </DialogContent>
      </Dialog>
    </>
  )
})

export default MessageList
