import { FC, memo, useState } from 'react'
import { HiOutlineUserGroup } from 'react-icons/hi2'
import classNames from 'classnames'
import ButtonBase from 'src/components/shared/ButtonBase'
import InputBase from 'src/components/shared/InputBase'

interface NewGroupDialogProps {
  className?: string
  closeDialog: () => void
}

const NewGroupDialog: FC<NewGroupDialogProps> = memo(({ className, closeDialog }) => {
  const [groupName, setGroupName] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value)
    setError('')
  }

  const handleSubmit = () => {
    if (!groupName.trim()) {
      setError('Group name is required')
      return
    }
    console.log('Group Created:', groupName)
  }

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={classNames(
        'bg-content backdrop-blur-[100px] border border-message-list max-w-[420px] w-full rounded-[20px] p-6 flex flex-col gap-10',
        className
      )}
    >
      <div className="w-full flex items-start gap-6">
        <div className="size-[63px] shrink-0 rounded-full bg-blur flex items-center justify-center">
          <HiOutlineUserGroup className="size-8" />
        </div>
        <div className="w-full">
          <InputBase
            value={groupName}
            onChange={handleChange}
            label="Group name"
            labelClassName="text-sm mb-0"
            containerClassName="w-full"
            containerInputClassName="h-10 border-b-[3px] border-color-border"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
      </div>
      <div className="flex flex-1 justify-end items-center gap-3">
        <ButtonBase
          onClick={closeDialog}
          className="font-semibold px-5 py-3 rounded-xl hover:bg-button transition-all duration-300 ease-in-out"
        >
          Cancel
        </ButtonBase>
        <ButtonBase
          onClick={handleSubmit}
          className="font-semibold px-5 py-3 rounded-xl hover:bg-button transition-all duration-300 ease-in-out"
        >
          Create
        </ButtonBase>
      </div>
    </div>
  )
})

export default NewGroupDialog
