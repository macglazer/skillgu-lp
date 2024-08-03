import { Paths } from '@/app/paths'
import Link from 'next/link'
import clx from 'classnames'

import { alcatra } from '@/app/fonts'

export const HeroBanner = () => {
  return (
    <section className="m-auto my-24 max-w-2xl px-5">
      <h3 className="hidden">Skillgu home page</h3>
      <p className="mb-8 w-full text-center text-32px font-bold leading-[48px] tracking-[-1px] text-primary lg:text-48px lg:leading-72px lg:tracking-[-2px]">
        Osiągaj swoje cele szybciej z{' '}
        <span
          className={clx(
            alcatra.className,
            'font-semibold italic tracking-wide text-secondary',
          )}
        >
          1:1
        </span>{' '}
        mentoringiem
      </p>
      <Link
        href={Paths.MENTORS}
        className="link-primary m-auto mb-12 block w-[180px] py-[14px] text-14px font-[600]"
      >
        Znajdź mentora
      </Link>
      <div className="h-[407px] rounded-3xl border"></div>
    </section>
  )
}
