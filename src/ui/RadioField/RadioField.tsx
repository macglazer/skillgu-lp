export const RadioField = ({
  value,
  label,
  name,
}: {
  value: string
  label: string
  name: string
}) => {
  return (
    <label className="flex items-center gap-3 text-base800 text-14px font-medium" htmlFor={value}>
      <input
        type="radio"
        value={value}
        id={value}
        className="shadow-radio inline-block h-5 w-5 appearance-none rounded-full border-[5px] border-base000 bg-white p-[5px] checked:bg-primary"
        name={name}
      />
      {label}
    </label>
  )
}
