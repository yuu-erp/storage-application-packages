import { Dispatch, FC, memo, SetStateAction } from 'react'
import classNames from 'classnames'
import Search from 'src/components/shared/Search'
import { contacts, messages } from 'src/mocks/data'

interface ChatProps {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
  handleOnClick: (contact: any) => void
}

const Chat: FC<ChatProps> = memo(({ search, setSearch, handleOnClick }) => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center">Messages</h2>
      <Search value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="grid grid-cols-3 gap-4 px-3 md:px-5">
        {contacts.map((contact) => (
          <div
            onClick={() => handleOnClick(contact)}
            key={contact.id}
            className="flex flex-col items-center"
          >
            <div className="size-16 shrink-0 rounded-full bg-message-list flex items-center justify-center md:shadow-md">
              <img
                src={contact.img}
                alt={contact.name}
                className="size-14 rounded-full object-cover"
              />
            </div>
            <p className="text-sm mt-2">{contact.name}</p>
          </div>
        ))}
      </div>

      <div
        style={{
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
        className="flex-1 h-full overflow-y-auto md:px-5"
      >
        {messages.map((msg, idx) => (
          <div
            onClick={() => handleOnClick(msg)}
            key={msg.id}
            className={classNames(
              idx > 0 && 'pt-3 md:pt-4 border-t border-solid border-color-border md:border-none',
              'flex gap-3 items-start p-2 pr-3 md:hover:rounded-2xl md:hover:bg-[#FFFFFF4D] hover:bg-selected'
            )}
          >
            <div className="size-12 shrink-0 rounded-full bg-message-list flex items-center justify-center md:shadow-md">
              <img
                src={msg.img}
                alt={msg.name}
                className="size-10 shrink-0 rounded-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start gap-4">
                <div className="flex flex-col gap-[2px]">
                  <p className="font-semibold">{msg.name}</p>
                  <p className="text-sm text-sub-title line-clamp-2">{msg.message}</p>
                </div>
                <p className="text-xs text-sub-title mt-1 text-nowrap">{msg.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
})

export default Chat
