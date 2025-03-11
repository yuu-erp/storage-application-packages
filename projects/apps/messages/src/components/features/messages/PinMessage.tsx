import { memo } from 'react'
import { CgClose } from 'react-icons/cg'
import ButtonBase from 'src/components/shared/ButtonBase'

const PinMessage = memo(() => {
  return (
    <div className="max-w-full w-full p-3 md:p-4 py-3 flex items-center justify-between bg-body md:bg-content md:backdrop-blur-[200px] shadow-1 absolute top-0 left-0 z-10 border-t border-color-border md:border-none">
      <div className="flex items-center gap-3 md:gap-4">
        <img
          src="https://i.pinimg.com/736x/1a/bc/e0/1abce0057f69996b32f6ab28984be34b.jpg"
          alt="img-message"
          className="size-10 shrink-0 rounded"
        />
        <div>
          <p className="text-[16px] md:text-[17px] font-semibold">Jenela</p>
          <p className="text-sub-title text-xs md:text-[13px]">Last Seen 2h ago</p>
        </div>
      </div>
      <ButtonBase className="size-10 md:size-11 hover:md:bg-button rounded-full transition-colors ease-in-out duration-200">
        <CgClose className="size-5 md:size-6 text-main" />
      </ButtonBase>
    </div>
  )
})

export default PinMessage
