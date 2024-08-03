import { Paths } from '@/app/paths'
import clx from 'classnames'

export const CtaBanner = () => {
  return (
    <div
      className={clx('bg-primary px-5 pb-88px pt-57px text-white lg:px-88px')}
    >
      <div className="m-auto max-w-[1304px]">
        <h3
          className={clx(
            'mb-40px text-48px font-bold leading-72px lg:mb-24px lg:text-56px lg:leading-100.8px',
          )}
        >
          Dołącz do nas już dziś!
        </h3>
        <div className={clx('items-cent flex flex-col gap-3 md:flex-row')}>
          <a
            href={Paths.REGISTER}
            className={clx('link-primary-rounded text-14 px-32px py-10px')}
          >
            Zostań mentorem
          </a>
          <a
            href={Paths.REGISTERASMENTEE}
            className={clx(
              'text-14 rounded-full bg-white-11 px-32px py-10px text-center font-semibold text-white',
            )}
          >
            Zostań uczniem
          </a>
        </div>
      </div>
    </div>
  )
}
