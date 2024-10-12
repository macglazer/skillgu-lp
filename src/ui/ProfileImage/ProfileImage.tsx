import NextImage from 'next/image'
import clx from 'classnames'

export const ProfileImage = ({
  alt,
  src,
  className,
}: {
  alt: string
  src: string
  className?: string
}) => {
  return (
    <div className="m-auto items-center overflow-hidden marker:max-w-96">
      <NextImage
        alt={alt}
        src={src}
        width={320}
        height={200}
        loading="lazy"
        className={clx('rounded-[20px] object-center', className)}
      />
    </div>
  )
}
