import { useCallback, useMemo, useState } from 'react'
import Chat from '../features/chat'
import Contact from '../features/contact'
import Group from '../features/group'
import SideBarMain from '../partials/SideBarMain'

export enum EnumScreen {
  call,
  chat,
  contact,
  group,
  setting
}

interface MessageSideBarProps {
  onClick?: () => void
  handleOpenDialog?: (data: 'contact' | 'group') => void
}

export default function MessagesSidebar({ onClick, handleOpenDialog }: MessageSideBarProps) {
  const [screen, setScreen] = useState<EnumScreen>(EnumScreen.chat)
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState('Mom')

  const handleOnClick = useCallback((contact) => {
    setSelected(contact.name)
    onClick?.()
  }, [])

  const screenData = useMemo(
    () => ({
      [EnumScreen.chat]: (
        <Chat search={search} setSearch={setSearch} handleOnClick={handleOnClick} />
      ),
      [EnumScreen.contact]: (
        <Contact handleOpenDialog={handleOpenDialog} search={search} setSearch={setSearch} />
      ),
      [EnumScreen.group]: (
        <Group handleOpenDialog={handleOpenDialog} search={search} setSearch={setSearch} />
      )
    }),
    [search, setSearch, handleOnClick]
  )

  return (
    <div className="relative flex-grow min-w-[250px] flex-shrink-0 h-full py-4 flex flex-col gap-0 md:gap-8 bg-sidebar md:backdrop-blur-[100px] transition-all duration-300 ease-in-out max-md:pb-[70px]">
      <div className="h-full flex-1 flex flex-col gap-6 md:gap-8">{screenData[screen]}</div>
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden md:hidden h-[68px] border-t border-solid border-color-border box-border">
        <SideBarMain isHorizontal={true} setScreen={setScreen} />
      </div>
    </div>
  )
}
