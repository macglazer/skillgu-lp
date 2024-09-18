import { Banner } from '@/ui/Banner/Banner'
import { CheckDecorative } from '@/ui/icons/CheckDecorative'
import { Stripe } from '@/ui/icons/Stripe'
import Image from 'next/image'

export default async function MentorPage() {
  const trades = [
    'Technicznej',
    'Programowania',
    'Rozwoju Startupów',
    'Biznesu',
    'Marketingu',
    'UX/UI Designu',
    'Zarządzania Projektami',
  ]
  return (
    <section className="m-auto flex w-full flex-col gap-[100px] px-5 py-[88px] lg:max-w-[1304px]">
      <h3 className="hidden">Dla mentora</h3>
      <div className="flex flex-col items-stretch justify-between gap-8 md:flex-row lg:gap-[100px]">
        <div className="mb-6 mt-4 w-full md:w-[50%]">
          <p className="mb-5 max-w-[600px] text-4xl font-bold leading-[56px] tracking-tight text-primary lg:text-48px lg:leading-[84px]">
            Czym jest Skillgu?
          </p>
          <p className="mb-5 text-14px font-medium leading-6 text-base600 lg:text-base lg:leading-[28.8px]">
            Skillgu to platforma stworzona z myślą o tysiącach mentorów,
            trenerów i osób, chcących wymieniać wiedzę oraz doświadczenia
            online.
          </p>
          <div className="mt-10 md:mt-4">
            <strong className="mb-6 inline-block text-xl font-bold leading-6">
              Stawiamy głównie na tematykę z branży
            </strong>
            <ul className="flex flex-wrap gap-3">
              {trades.map((item) => (
                <li key={item}>
                  <p className="rounded-full bg-base200 px-6 py-[10px] text-14px font-semibold leading-[25.2px]">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Banner type="mentor" />
      </div>
      <div className="flex flex-col justify-between gap-6 overflow-hidden rounded-[20px] border border-base400 pl-10 pt-10 lg:items-end xl:flex-row xl:items-start xl:gap-[88px]">
        <div className="flex w-full flex-col gap-10 md:flex-row xl:w-[50%] xl:flex-col">
          <div className="w-full md:w-[50%] lg:w-full">
            <p className="mb-5 inline-block text-2xl font-bold leading-10 lg:mb-6 lg:text-[32px]">
              Współpraca Skillgu z mentorami
            </p>
            <p className="mb-5 w-[94%] text-14px font-medium leading-6 text-base600 lg:mb-8 lg:text-base lg:leading-[28.8px]">
              Możliwe, że baza Twoich uczniów jest już wypełniona po brzegi i
              nie zabiegasz o nowe osoby. W takim wypadku również możemy
              współpracować!
            </p>
          </div>
          <div className="w-full md:w-[50%] lg:w-full">
            <p className="mb-5 inline-block text-xl font-bold leading-10 lg:mb-6 lg:text-[28px]">
              Wyższy poziom organizacji
            </p>
            <p className="mb-8 w-[94%] text-14px font-medium leading-6 text-base600 lg:text-base lg:leading-[28.8px]">
              Przenosząc się do nas, ułatwiasz codzienność Twoim podopiecznym, a
              sobie poprawiasz komfort działania.
            </p>
            <ul className="mb-10 flex flex-col gap-4">
              <li className="flex items-center gap-2">
                <CheckDecorative />
                <p className="text-xs font-semibold text-base600 lg:text-sm">
                  Ujednolicona komunikacja
                </p>
              </li>
              <li className="flex items-center gap-2">
                <CheckDecorative />
                <p className="text-xs font-semibold text-base600 lg:text-sm">
                  Automatyczne wypłaty <Stripe className="inline"/>
                </p>
              </li>
              <li className="flex items-center gap-2">
                <CheckDecorative />
                <p className="text-xs font-semibold text-base600 lg:text-sm">
                  Planowanie i fakturowanie
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
              src="/payments.png"
              alt="Mentor profile page"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="max-w-[88%] md:mb-10 lg:mb-0"
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
    </section>
  )
}
