import { PricingPlan } from '@/ui/PricingPlan'

export default async function Pricing() {
  return (
    <section className="m-auto flex w-full max-w-xl flex-col gap-10 p-[44px] px-5 md:max-w-fit lg:max-w-[1304px]">
      <h3 className="text-center text-[36px] font-bold leading-[1.2] tracking-normal text-primary lg:text-5xl lg:leading-[72px]">
        Cennik
      </h3>
      <div className="flex flex-col justify-center gap-8 md:flex-row md:flex-wrap">
        <PricingPlan
          type="free"
          price={0}
          properties={[
            'Pełny dostęp do aplikacji',
            'Nieograniczona liczba mentee',
            '18% prowizji od spotkania',
            'Brak darmowych spotkań',
          ]}
        />
        <PricingPlan
          type="basic"
          price={89}
          properties={[
            '5 darmowych spotkań w miesiącu',
            'Gwarancja stałej opłaty miesięcznej',
            'Niższa prowizja: 10%',
            'Pełny dostęp do aplikacji',
            'Nieograniczona liczba mentee',
          ]}
        />
        <PricingPlan
          type="pro"
          price={190}
          properties={[
            'Darmowe spotkania bez limitu',
            'Gwarancja stałej opłaty miesięcznej',
            'Brak prowizji',
            'Pełny dostęp do aplikacji',
            'Nieograniczona liczba mentee',
          ]}
        />
      </div>
    </section>
  )
}
