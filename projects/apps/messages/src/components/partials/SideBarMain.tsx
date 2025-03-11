import { Dispatch, SetStateAction, useCallback, useState } from 'react'
import { HiOutlineUserGroup, HiUserGroup } from 'react-icons/hi2'
import {
  IoCall,
  IoCallOutline,
  IoChatboxEllipses,
  IoChatboxEllipsesOutline,
  IoPerson,
  IoPersonOutline,
  IoSettings,
  IoSettingsOutline
} from 'react-icons/io5'
import { EnumScreen } from '../shared/MessageSideBar'

interface SideBarMainProps {
  isHorizontal?: boolean
  setScreen: Dispatch<SetStateAction<EnumScreen>>
}

const SideBarMain = ({ isHorizontal, setScreen }: SideBarMainProps) => {
  const [selected, setSelected] = useState<number>(1)
  const dataSideBar = [
    {
      id: 1,
      activeIcon: IoCall,
      inactiveIcon: IoCallOutline
    },
    {
      id: 2,
      activeIcon: HiUserGroup,
      inactiveIcon: HiOutlineUserGroup
    },
    {
      id: 3,
      activeIcon: IoPerson,
      inactiveIcon: IoPersonOutline
    },
    {
      id: 4,
      activeIcon: IoChatboxEllipses,
      inactiveIcon: IoChatboxEllipsesOutline
    },
    {
      id: 5,
      activeIcon: IoSettings,
      inactiveIcon: IoSettingsOutline
    }
  ]

  const handleTabClick = useCallback((id: number) => {
    setSelected(id)
    if (id === 1) setScreen(EnumScreen.call)
    if (id === 2) setScreen(EnumScreen.group)
    if (id === 3) setScreen(EnumScreen.contact)
    if (id === 4) setScreen(EnumScreen.chat)
    if (id === 5) setScreen(EnumScreen.setting)
  }, [])

  return (
    <div
      className={`flex ${isHorizontal ? 'flex-row' : 'flex-col'} gap-3 p-3 rounded-full bg-sidebar md:bg-content md:backdrop-blur-lg justify-between`}
    >
      {dataSideBar.map(({ id, activeIcon: ActiveIcon, inactiveIcon: InactiveIcon }) => (
        <div
          key={id}
          className={`w-12 rounded-full aspect-square flex items-center justify-center cursor-pointer ${
            selected === id ? 'bg-selected' : ''
          }`}
          onClick={() => handleTabClick(id)}
        >
          {selected === id ? <ActiveIcon size={20} /> : <InactiveIcon size={20} />}
        </div>
      ))}
    </div>
  )
}

export default SideBarMain
