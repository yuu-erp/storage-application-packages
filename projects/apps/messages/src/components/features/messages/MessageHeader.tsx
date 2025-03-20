import { FC, memo } from 'react'
import { FiPhone } from 'react-icons/fi'
import { IoChevronBack } from 'react-icons/io5'
import { LuVideo } from 'react-icons/lu'
import ThemeToggle from 'src/components/partials/ThemeToggle'
import ButtonBase from 'src/components/shared/ButtonBase'
import { Call } from 'src/pages/Messages'

interface MessageHeaderProps {
  onClick?: () => void
  onBack?: () => void
  onCall?: (data: Call) => void
}

const MessageHeader: FC<MessageHeaderProps> = memo(({ onClick, onBack, onCall }) => {
  return (
    <div className="py-3 px-3 md:px-5 flex items-center justify-between bg-header md:backdrop-blur-lg shadow-1">
      <div className="flex items-center gap-2 md:gap-3">
        <ButtonBase className="text-main sm:hidden" onClick={onBack}>
          <IoChevronBack className="size-6 md:size-[30px]" />
        </ButtonBase>
        <div onClick={onClick} className="flex items-center gap-2 md:gap-3">
          <img
            src="https://s3-alpha-sig.figma.com/img/9da3/e6a4/5742f0ef2aade4b7e0253957a9aab87c?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=O1mGzaRO0C-P0VqOhAPtj3l-Zfjp-ups1sw8hozphVKRCsTnr7WaNQMeHxVe7fcZ8nV9JQfyZBiYJlnXod1KelgNRqR~FXrWdZiW7YhaB4ho2rhSYGx-c9UhJaFeJuudgZ2IpLYG5DoE5t5OOeZRJZhR3laXANIbV~ekyn-FPkXwZoHMLTVdH~~mXVgZiAQaNIyTIYsk~~cwEHclaE-pNDFFaDYRxGHtFL9cQa3nwaq4qzrOpTAhqywPQF2b2OXDde0OoxU~EmM23UyLiSCDNrx6Z1QAA1rry93cY~5VUy0X7z~HHksebYakMxlaSsCoRr7UFijsyeRyMcvwHw92dw__"
            alt="Avatar"
            className="size-10 sm:size-[50px] md:size-[59px] shrink-0 rounded-full object-cover object-center"
          />
          <div className="space-y-[1px] md:space-y-[2px]">
            <p className="text-main text-lg md:text-2xl font-semibold">Jenela</p>
            <p className="text-sub-title text-xs md:text-sm">Last Seen 2h ago</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-0 sm:gap-2 md:gap-4">
        <ThemeToggle />
        <ButtonBase
          onClick={() => onCall?.({ isCall: true, typeCall: 'calling' })}
          className="size-10 md:size-11 md:bg-button rounded-full"
        >
          <FiPhone size={20} />
        </ButtonBase>
        <ButtonBase
          onClick={() => onCall?.({ isCall: true, typeCall: 'video' })}
          className="size-10 md:size-11 md:bg-button rounded-full"
        >
          <LuVideo size={24} />
        </ButtonBase>
      </div>
    </div>
  )
})

export default MessageHeader
