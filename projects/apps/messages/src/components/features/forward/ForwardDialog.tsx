import { Dispatch, FC, memo, SetStateAction, useState } from 'react'
import classNames from 'classnames'
import ButtonBase from 'src/components/shared/ButtonBase'
import MessageInListItem from 'src/components/shared/MessageInListItem'
import Search from 'src/components/shared/Search'
import { messages } from 'src/mocks/data'

interface ForwardDialogProps {
  className?: string
  setOpenForwrad: Dispatch<SetStateAction<boolean>>
}

const ForwardDialog: FC<ForwardDialogProps> = memo(({ className, setOpenForwrad }) => {
  const [search, setSearch] = useState<string>('')

  return (
    <div
      className={classNames(
        'w-full min-w-[310px] max-w-sm h-[90vh] py-5 flex flex-col gap-2 bg-content backdrop-blur-[100px] border border-message-list rounded-[20px]',
        className
      )}
    >
      <div className="px-5 mb-3">
        <p className="text-2xl font-bold">Forward to...</p>
      </div>
      <Search
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="rounded-[10px]"
      />
      <div
        style={{
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
        className="flex-1 md:px-5 h-full overflow-y-auto"
      >
        {messages.map((msg, idx) => (
          <MessageInListItem key={msg.id} msg={msg} className={classNames(idx > 0 && 'md:mt-3')} />
        ))}
      </div>
      <div className="flex justify-end w-full px-5">
        <ButtonBase
          onClick={() => setOpenForwrad(false)}
          className="font-semibold px-4 py-2 rounded-xl hover:bg-button transition-all duration-300 ease-in-out"
        >
          Cancel
        </ButtonBase>
      </div>
    </div>
  )
})

export default ForwardDialog
