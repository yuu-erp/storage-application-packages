import { Dispatch, FC, memo, SetStateAction } from 'react'
import { IoPersonAddOutline } from 'react-icons/io5'
import classNames from 'classnames'
import Search from 'src/components/shared/Search'
import { contactList } from 'src/mocks/data'
import ContactListItem from '../contact/ContactListItem'

interface GroupProps {
  className?: string
  search: string
  setSearch: Dispatch<SetStateAction<string>>
  handleOpenDialog?: (data: 'contact' | 'group') => void
}

const Group: FC<GroupProps> = memo(({ search, setSearch, handleOpenDialog }) => {
  return (
    <>
      <div className="flex items-center justify-between px-3 md:px-5">
        <div className="size-7 shrink-0"></div>
        <p className="text-2xl font-bold">New Group</p>
        <div
          onClick={() => handleOpenDialog?.('group')}
          className="w-8 h-8 flex items-center justify-center"
        >
          <IoPersonAddOutline className="size-5" />
        </div>
      </div>
      <Search
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="!rounded-[10px]"
      />
      <div
        style={{
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
        className="flex-1 h-full overflow-y-auto"
      >
        {contactList.map((contact, idx) => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            className={classNames(idx > 0 && 'mt-3')}
          />
        ))}
      </div>
    </>
  )
})

export default Group
