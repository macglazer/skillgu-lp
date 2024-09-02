import clx from 'classnames'

type ValueBoxPropTypes = {
  className: string
  text: string
  position: string
  icon: string
}
export const ValueBox = ({
  className,
  text,
  position,
  icon,
}: ValueBoxPropTypes) => {
  return (
    <div
      className={clx(
        'absolute hidden items-center overflow-hidden rounded-lg border border-base200 px-4 py-3 before:absolute before:h-[45px] before:w-[45px] before:rounded-full before:blur-3xl xl:flex xl:gap-[10px]',
        position,
        className,
      )}
    >
      {icon}
      <p className="text-14px font-semibold">{text}</p>
    </div>
  )
}
