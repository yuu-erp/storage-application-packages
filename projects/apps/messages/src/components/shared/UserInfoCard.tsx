import React, { useState } from 'react'
import { FaRegFile } from 'react-icons/fa'
import { FiTrash } from 'react-icons/fi'
import { HiOutlineUserGroup, HiOutlineVideoCamera } from 'react-icons/hi'
import { IoChevronBack } from 'react-icons/io5'
import { LiaQrcodeSolid } from 'react-icons/lia'
import { LuPencil } from 'react-icons/lu'
import { MdOutlineImage } from 'react-icons/md'
import { RiShareForwardLine } from 'react-icons/ri'
import { SlLink } from 'react-icons/sl'
import { TfiHandStop } from 'react-icons/tfi'
import classNames from 'classnames'
import { Bell } from 'lucide-react'
import ButtonBase from '../shared/ButtonBase'
import CardContainer from '../shared/CardContainer'

const dataBody = [
  {
    id: 1,
    icon: <MdOutlineImage className="size-6 md:size-7" />,
    text: '86 photos'
  },
  {
    id: 2,
    icon: <HiOutlineVideoCamera className="size-6 md:size-7" />,
    text: '8 videos'
  },
  {
    id: 3,
    icon: <FaRegFile className="size-5 md:size-6" />,
    text: '6 files'
  },
  {
    id: 4,
    icon: <SlLink className="size-5 md:size-6" />,
    text: '88 share links'
  },
  {
    id: 5,
    icon: <HiOutlineUserGroup className="size-6 md:size-7" />,
    text: '1 group in common'
  }
]

const dataFooter = [
  {
    id: 1,
    icon: <RiShareForwardLine className="size-6 md:size-7" />,
    text: 'Share this contact'
  },
  {
    id: 2,
    icon: <LuPencil className="size-5 md:size-6" />,
    text: 'Edit contact'
  },
  {
    id: 3,
    icon: <FiTrash className="size-5 md:size-6" />,
    text: 'Delete contact'
  },
  {
    id: 4,
    icon: <TfiHandStop className="size-5 md:size-6" />,
    text: 'Block user'
  }
]

interface UserInfoCardProps {
  onBack?: () => void
}

const UserInfoCard: React.FC<UserInfoCardProps> = ({ onBack }) => {
  const [enabled, setEnabled] = useState(true)

  return (
    <div
      style={{
        msOverflowStyle: 'none',
        scrollbarWidth: 'none'
      }}
      className="min-w-[320px] flex-1 h-full flex flex-col gap-1 overflow-auto"
    >
      <CardContainer className="rounded-b-none sm:rounded-[46px] flex flex-col gap-1 p-0">
        <div className="flex flex-col gap-6 justify-center">
          <div className="flex gap-5">
            <ButtonBase onClick={onBack}>
              <IoChevronBack className="size-6 md:size-7" />
            </ButtonBase>
            <span className="text-lg sm:text-xl md:text-[24px]/[28px] font-bold">User Info</span>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/9da3/e6a4/5742f0ef2aade4b7e0253957a9aab87c?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=O1mGzaRO0C-P0VqOhAPtj3l-Zfjp-ups1sw8hozphVKRCsTnr7WaNQMeHxVe7fcZ8nV9JQfyZBiYJlnXod1KelgNRqR~FXrWdZiW7YhaB4ho2rhSYGx-c9UhJaFeJuudgZ2IpLYG5DoE5t5OOeZRJZhR3laXANIbV~ekyn-FPkXwZoHMLTVdH~~mXVgZiAQaNIyTIYsk~~cwEHclaE-pNDFFaDYRxGHtFL9cQa3nwaq4qzrOpTAhqywPQF2b2OXDde0OoxU~EmM23UyLiSCDNrx6Z1QAA1rry93cY~5VUy0X7z~HHksebYakMxlaSsCoRr7UFijsyeRyMcvwHw92dw__"
              alt="Avatar"
              className="size-16 md:size-[92px] rounded-full object-cover"
            />
            <div className="h-full flex flex-col items-start justify-center gap-2">
              <h2 className="text-2xl md:text-[26px]/[30px] font-semibold">Jenela</h2>
              <span className="text-[14px]/[16px] font-normal">Last Seen 2h ago</span>
            </div>
          </div>
          <div className="ml-16 flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <span className="text-base md:text-[20px]/[28px] font-medium">+84 0909090009</span>
              <span className="text-[14px]/[16px] font-normal">Mobile</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="w-full flex flex-row items-center space-x-[50px] sm:space-x-[150px]">
                <span className="text-blue-400">@abc.xyz</span>
                <LiaQrcodeSolid className="text-blue-400" size={30} />
              </div>
              <span className="text-[14px]/[16px] font-normal">Username</span>
            </div>
          </div>
          <div className="flex items-center w-full space-x-[30px] sm:space-x-[120px]">
            <div className="flex items-center gap-5 md:gap-10">
              <Bell className="size-[22px] md:size-6" />
              <span className="text-base md:text-[20px]/[28px] font-semibold">Notification</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={enabled}
                onChange={() => setEnabled(!enabled)}
                className="sr-only peer"
              />
              <div className="w-12 h-6 bg-gray-400 rounded-full peer-checked:bg-green-500 peer-checked:border-green-400 transition">
                <div
                  className={`size-5 bg-white rounded-full absolute top-0.5 left-1 transition-transform ${
                    enabled ? 'translate-x-[22px]' : '-translate-x-0.5'
                  }`}
                />
              </div>
            </label>
          </div>
        </div>
      </CardContainer>
      <CardContainer className="flex flex-col gap-5 md:gap-6">
        {dataBody.map((item) => (
          <div key={item.id} className="flex items-center gap-5 md:gap-10">
            <div className="size-6 md:size-7 shrink-0 flex items-center justify-center">
              {item.icon}
            </div>
            <span className="text-base md:text-[20px]/[28px] font-semibold">{item.text}</span>
          </div>
        ))}
      </CardContainer>
      <CardContainer className="flex-1 rounded-t-none rounded-[46px] flex flex-col gap-5 md:gap-6">
        {dataFooter.map((item, index) => (
          <div
            key={item.id}
            className={classNames(
              index === dataFooter.length - 1 ? 'text-[red]' : 'text-inherit',
              `flex items-center gap-5 md:gap-10`
            )}
          >
            <div className="size-6 md:size-7 shrink-0 flex items-center justify-center">
              {item.icon}
            </div>
            <span className="text-base md:text-[20px]/[28px] font-semibold">{item.text}</span>
          </div>
        ))}
      </CardContainer>
    </div>
  )
}

export default UserInfoCard
