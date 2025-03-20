import { FC, memo, useState } from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import classNames from 'classnames'
import ButtonBase from 'src/components/shared/ButtonBase'
import InputBase from 'src/components/shared/InputBase'

interface NewContactDialogProps {
  className?: string
  closeDialog: () => void
}

const NewContactDialog: FC<NewContactDialogProps> = memo(({ className, closeDialog }) => {
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '' })
  const [errors, setErrors] = useState({ firstName: '', phone: '' })

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const handleSubmit = () => {
    const newErrors = { firstName: '', phone: '' }
    if (!form.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }
    if (newErrors.firstName || newErrors.phone) {
      setErrors(newErrors)
      return
    }
    console.log('New Contact Created:', form)
  }

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={classNames(
        'bg-content backdrop-blur-[100px] border border-message-list max-w-[420px] w-full rounded-[20px] p-6 sm:p-6 flex flex-col gap-4 sm:gap-8',
        className
      )}
    >
      <p className="text-xl sm:text-2xl font-bold">New Contact</p>
      <div className="flex flex-col gap-3 sm:gap-5">
        <div className="w-full flex items-center gap-4 sm:gap-6">
          <FaUser className="size-7" />
          <div className="w-full">
            <InputBase
              label="First name"
              labelClassName="text-sm mb-0"
              containerClassName="w-full"
              containerInputClassName="h-10 border-b-[3px] border-color-border"
              value={form.firstName}
              onChange={handleChange('firstName')}
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
          </div>
        </div>
        <div className="w-full flex items-center gap-4 sm:gap-6">
          <div className="size-7 shrink-0" />
          <div className="w-full">
            <InputBase
              label="Last name"
              labelClassName="text-sm mb-0"
              containerClassName="w-full"
              containerInputClassName="h-10 border-b-[3px] border-color-border"
              value={form.lastName}
              onChange={handleChange('lastName')}
            />
          </div>
        </div>
        <div className="w-full flex items-center gap-4 sm:gap-6">
          <BsFillTelephoneFill className="size-7" />
          <div className="w-full">
            <InputBase
              label="Phone number"
              labelClassName="text-sm mb-0"
              containerClassName="w-full"
              containerInputClassName="h-10 border-b-[3px] border-color-border"
              value={form.phone}
              onChange={handleChange('phone')}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-end items-center gap-3">
        <ButtonBase
          className="font-semibold px-5 py-3 rounded-xl hover:bg-button transition-all duration-300 ease-in-out"
          onClick={() => {
            setForm({ firstName: '', lastName: '', phone: '' })
            closeDialog()
          }}
        >
          Cancel
        </ButtonBase>
        <ButtonBase
          className="font-semibold px-5 py-3 rounded-xl hover:bg-button transition-all duration-300 ease-in-out"
          onClick={handleSubmit}
        >
          Create
        </ButtonBase>
      </div>
    </div>
  )
})

export default NewContactDialog
