import { AboutSkillgu } from '@/ui/AboutSkillgu/AboutSkillgu'
import { Banner } from '@/ui/Banner/Banner'
import { CheckDecorative } from '@/ui/icons/CheckDecorative'
import { Stripe } from '@/ui/icons/Stripe'
import Image from 'next/image'
import { MentorsList } from '../_components'

type MenteePageType = {
  readonly searchParams: {
    cat: string
  }
}
export default async function MenteePage({ searchParams }: MenteePageType) {
  const currentCategory = searchParams.cat?.toString() ?? ''
  return (
    <section className="m-auto flex w-full flex-col gap-[100px] px-5 py-[88px] lg:max-w-[1304px]">
      <h3 className="hidden">Dla mentora</h3>
      <div className="flex flex-col items-stretch justify-between gap-8 md:flex-row lg:gap-[100px]">
        <AboutSkillgu type="mentee" />
        <Banner type="mentee" />
      </div>
      <div className="flex flex-col justify-between gap-6 overflow-hidden rounded-[20px] border border-base400 pl-10 pt-10 lg:items-end xl:flex-row xl:items-start xl:gap-[88px]">
        <div className="flex w-full flex-col gap-10 md:flex-row xl:w-[50%] xl:flex-col">
          <div className="w-full md:w-[50%] lg:w-full">
            <p className="mb-5 inline-block text-2xl font-bold leading-10 lg:mb-6 lg:text-[32px]">
              Benefity dla mentee
            </p>
            <p className="mb-5 w-[94%] text-14px font-medium leading-6 text-base600 lg:mb-8 lg:text-base lg:leading-[28.8px]">
              Jeśli Twoja kariera utknęła w miejscu, kursy online to za mało, albo po prostu potrzebujesz bezpośredniej pomocy w postaci konsultacji eksperta, szkolenia 1:1, przygotować się do interview,
              popracować nad trudnym zagadnieniem, przebranżowić, lub przeanalizować plan na własny startup, Skillgu to miejsce, gdzie możesz znaleść
              doświadczonego konsultanta.
            </p>
          </div>
          <div className="w-full md:w-[50%] lg:w-full">
            <p className="mb-5 inline-block text-xl font-bold leading-10 lg:mb-6 lg:text-[28px]">
             Czas to pieniądz
            </p>
            <p className="mb-8 w-[94%] text-14px font-medium leading-6 text-base600 lg:text-base lg:leading-[28.8px]">
              Wykorzytaj doświadczenie ludzi którzy byli tam, gdzie ty chcesz być. Jasne zasady, współpracy.
            </p>
            <ul className="mb-10 flex flex-col gap-4">
              <li className="flex items-center gap-2">
                <CheckDecorative />
                <p className="text-xs font-semibold text-base600 lg:text-sm">
                 Zweryfikowani mentorzy
                </p>
              </li>
              <li className="flex items-center gap-2">
                <CheckDecorative />
                <p className="text-xs font-semibold text-base600 lg:text-sm">
                  Bezpieczne transakcje dzięki obsłudze z <Stripe className="inline" />
                </p>
              </li>
              <li className="flex items-center gap-2">
                <CheckDecorative />
                <p className="text-xs font-semibold text-base600 lg:text-sm">
                  Jasne zasady współpracy.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex w-full flex-col items-end md:flex-row md:gap-8 lg:gap-0 xl:w-[50%] xl:flex-col">
          <div className="w-full md:w-[50%] lg:w-full">
            <Image
              width={700}
              height={700}
              loading="lazy"
              src="/mentee-sub.png"
              alt="Mentor profile page"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="max-w-[88%] rounded-b-xl rounded-t-xl border border-base400 md:mb-6 xl:mb-0"
            />
          </div>
          <div className="w-full md:w-[50%] lg:w-full">
            <Image
              width={700}
              height={700}
              loading="lazy"
              src="/chat-b.png"
              alt="Mentor profile page"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <MentorsList currentCategory={currentCategory} />
    </section>
  )
}
