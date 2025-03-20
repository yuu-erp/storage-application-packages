import { FC, memo, useCallback } from 'react'
import { BsPinAngle, BsReply } from 'react-icons/bs'
import { FaRegCircleCheck } from 'react-icons/fa6'
import { MdContentCopy, MdOutlineDelete, MdOutlineEdit } from 'react-icons/md'
import { RiShareForwardLine } from 'react-icons/ri'
import classNames from 'classnames'

const options = [
  { icon: BsReply, lable: 'Reply' },
  { icon: MdOutlineEdit, lable: 'Edit' },
  { icon: BsPinAngle, lable: 'Pin' },
  { icon: MdContentCopy, lable: 'Copy Text' },
  { icon: RiShareForwardLine, lable: 'Forward' },
  { icon: MdOutlineDelete, lable: 'Delete' },
  { icon: FaRegCircleCheck, lable: 'Select' }
]

interface OptionsPopupProps {
  handleOpenForward: () => void
}

const OptionsPopup: FC<OptionsPopupProps> = memo(({ handleOpenForward }) => {
  const handleClickItem = useCallback(
    (label: string) => () => {
      if (label === 'Forward') handleOpenForward()
    },
    [handleOpenForward]
  )

  return (
    <div className="min-w-[160px] p-2 flex flex-col gap-1 bg-body md:bg-popover backdrop-blur-2xl rounded-lg">
      {options.map((option, idx) => {
        return (
          <div
            key={option.lable}
            onClick={handleClickItem(option.lable)}
            className="p-1 flex items-center gap-2 rounded-md hover:bg-white/50 group transition-colors duration-200 ease-in-out"
          >
            <div className="flex items-center justify-center size-5 shrink-0">
              <option.icon
                className={classNames(
                  idx !== options.length - 1 ? 'size-5' : 'size-[16px]',
                  'group-hover:text-black/60'
                )}
              />
            </div>
            <span className="font-medium group-hover:text-black/60">{option.lable}</span>
          </div>
        )
      })}
    </div>
  )
})

export default OptionsPopup
