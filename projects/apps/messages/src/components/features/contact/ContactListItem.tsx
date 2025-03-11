import { FC, memo } from 'react'
import classNames from 'classnames'
import { getLastSeen } from 'src/utils/helper'

interface ContactListItemProps {
  contact: ContactList
  className?: string
}

const ContactListItem: FC<ContactListItemProps> = memo(({ contact, className }) => {
  return (
    <div
      className={classNames(
        'flex gap-3 items-center py-2 px-4 border-t border-solid border-color-border md:border-none md:hover:rounded-[10px] md:hover:bg-[#FFFFFF4D] hover:bg-selected transition-all duration-300 ease-in-out',
        className
      )}
    >
      <div className="size-[50px] shrink-0 rounded-full md:shadow-md overflow-hidden">
        <img
          src={contact.img}
          alt={contact.name}
          className="size-full object-cover object-center"
        />
      </div>
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <p className="font-semibold">{contact.name}</p>
          <p className="text-sm text-sub-title line-clamp-1">{getLastSeen(contact.lastOnline)}</p>
        </div>
      </div>
    </div>
  )
})

export default ContactListItem
