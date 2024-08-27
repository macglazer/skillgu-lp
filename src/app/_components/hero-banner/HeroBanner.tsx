import React, { Suspense } from 'react'
import { Paths } from '@/app/paths'
import Link from 'next/link'
import clx from 'classnames'
import { alcatra } from '@/app/fonts'
import { ValueBox } from '@/ui/valueBox'

const HeroBannerVideo = React.lazy(() =>
  import('./HeroBannerVideo').then((module) => ({
    default: module.HeroBannerVideo,
  })),
)

export const HeroBanner = () => {
  return (
    <section className="relative m-auto px-5 lg:max-w-[1440px]">
      <ValueBox
        text="Gotowi eksperci, aby Cię wspomóc"
        position="left-6 top-16"
        className="before:right-4 before:top-[-50%] before:bg-[#92BDF6]"
        icon="👨‍💻"
      />
      <ValueBox
        text="Osiągaj więcej z mentorem"
        position="left-6 top-80"
        className="before:right-[-6px] before:top-[-50%] before:bg-secondary"
        icon="🎓"
      />
      <ValueBox
        text="Twoja droga do sukcesu"
        position="right-5 top-40"
        className="before:left-0 before:top-[-100%] before:bg-[#92BDF6]"
        icon="🚀"
      />
      <ValueBox
        text="Indywidualne podejście"
        position="right-5 top-[480px]"
        className="before:right-[45px] before:top-[-50%] before:bg-secondary"
        icon="🎯"
      />
      <div className="m-auto max-w-3xl px-5 py-24">
        <h3 className="hidden">Skillgu home page</h3>
        <p className="mb-8 w-full text-center text-32px font-bold leading-[48px] tracking-[-1px] text-primary lg:text-48px lg:leading-72px lg:tracking-[-2px]">
            Mentoring to{' '}
          <span
            className={clx(
              alcatra.className,
              'font-semibold italic tracking-wide text-secondary',
            )}
          >6 razy większa,
          </span>{' '}
            szansa na awans i stabilne źródło dochodu
        </p>
        <Link
          href={Paths.MENTORS}
          className="link-primary m-auto mb-12 block w-[180px] py-[14px] text-14px font-[600]"
        >
          Znajdź mentora
        </Link>
        <Suspense fallback={<div className="h-[407px] rounded-3xl border" />}>
          <HeroBannerVideo />
        </Suspense>
      </div>
    </section>
  )
}
