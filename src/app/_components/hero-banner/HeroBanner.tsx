import React, { Suspense } from 'react'
import Link from 'next/link'
import { Paths } from '@/app/paths'
import { Stripe } from '@/ui/icons/Stripe'
import { TypingAnimation } from '@/ui/TypingAnimation'

const HeroBannerVideo = React.lazy(() =>
  import('./HeroBannerVideo').then((module) => ({
    default: module.HeroBannerVideo,
  })),
)

export const HeroBanner = () => {
  const textArray = [
    'IT',
    'startupów',
    'UX/UI',
    'biznesu',
    'marketingu',
    'rozwoju zawodowego',
    'strategii biznesowej',
    'projektowania graficznego',
    'zarządzania projektami',
    'innowacji technologicznych',
    'montażu video',
    'social media',
  ]

  return (
    <section className="relative m-auto px-5 lg:max-w-[1440px]">
      <div className="m-auto px-5 pt-88px">
        <h3 className="hidden">Skillgu home page</h3>

        <div className="mb-88px flex flex-col md:flex-row w-full items-start justify-between gap-10 text-primary">
          <div>
            <p className="mb-8 w-full text-4xl font-bold leading-[56px] tracking-tight lg:text-56px lg:leading-[84px]">
              <span className="text-4xl font-bold leading-[56px] tracking-tight text-primary lg:text-56px lg:leading-[84px]">
                Znajdź swojego <br className="hidden md:block"/> mentora od:
                <br />
              </span>{' '}
              <TypingAnimation
                words={textArray}
                typingSpeed={3}
                deletingSpeed={9}
                deletingDelay={1000}
                className="mt-4 font-bold text-orange-500 transition-opacity duration-500 ease-in-out"
                cursorClassName="border-red-300"
              />
            </p>
            <Link
              href={Paths.MENTORS}
              className="link-primary-rounded inline-block w-[180px] py-4 text-14px"
            >
              Znajdź mentora
            </Link>
          </div>
          <div className="w-full rounded-[20px] border border-base400 p-10 md:max-w-[50%] xl:max-w-lg">
            <p className="mb-4 text-2xl font-bold tracking-tight lg:text-3xl">
              Czym jest Skillgu?
            </p>
            <p className="mb-4 text-14px lg:text-base font-medium leading-6 lg:leading-[28.8px] text-base600">
              Skillgu to platforma stworzona z myślą o tysiącach mentorów,
              trenerów i osób, chcących wymieniać wiedzę oraz doświadczenia
              online. Jesteśmy również uzupełnieniem dla kursów i szkoleń wideo.
            </p>
            <span className="lg:flex lg:gap-2 text-base font-semibold leading-[28.8px] text-base800">
              Płatności obsługiwane przez {" "}
              <Stripe className="inline"/>
            </span>
          </div>
        </div>

        <Suspense
          fallback={
            <div className="h-[400px] rounded-3xl border md:h-[495px] lg:h-[645px]" />
          }
        >
          <HeroBannerVideo />
        </Suspense>
      </div>
    </section>
  )
}
