export interface IFormValues {
  email: string
  message: string
}

export type InputFieldTypes = {
  name: string
  label: string
  type?: HTMLInputElement['type']
  tag?: 'input' | 'textarea'
  required?: boolean
}

export const InputText = ({
  name,
  label,
  type = 'text',
  tag = 'input',
  required = false,
}: InputFieldTypes) => {
  const Tag = tag
  return (
    <div className="w-full">
      <label
        className="mb-3 block text-14px font-semibold leading-6"
        htmlFor={name}
      >
        {label}
      </label>
      <Tag
        id={name}
        name={name}
        type={type}
        className="block w-full rounded-lg border border-base400 p-3 text-base600 outline-none"
        required={required}
      />
    </div>
  )
}
