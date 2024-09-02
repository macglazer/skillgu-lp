import { Basic } from '../icons/Basic'
import { CheckCircle } from '../icons/CheckCircle'
import { Pro } from '../icons/Pro'

type PricingPlanPropsType = {
  type: 'free' | 'basic' | 'pro'
  price: number
  properties: string[]
}

export const PricingPlan = ({
  type,
  price,
  properties,
}: PricingPlanPropsType) => {
 const planName = {
      free: "Free",
      basic: "Basic",
      pro: "Pro"
 }
  const Icon = type === 'basic' ? Basic : Pro
  return (
    <div className="flex w-full max-w-xs flex-col items-start gap-4 rounded-xl border px-5 py-8 transition-transform duration-300 ease-in-out hover:scale-105 lg:gap-6">
      <div className="flex items-center justify-start gap-3">
        {type !== 'free' ?(<div className="flex h-10 w-10 items-center justify-center rounded-full border border-base400 bg-base200">
        <Icon /> 
        </div>): null}
        <h4 className="text-[24px] font-bold -tracking-[1px] text-primary lg:text-[28px] lg:leading-[48px]">
          {planName[type]}
        </h4>
      </div>
      <p className="text-[28px] font-bold -tracking-[1px] text-secondary">
        {price} zł{' '}
        <span className="text-[14px] font-semibold text-base800">/miesiąc</span>
      </p>
      <div>
        <h5 className="mb-3 text-[14px] font-semibold text-primary lg:text-base">
          Co ten plan zawiera?
        </h5>
        <ul className="flex list-none flex-col gap-3 text-left text-base600">
          {properties.map((item) => (
            <li className="flex items-center gap-2" key={item}>
              <span className="h-6 w-6">
                <CheckCircle className="text-primary" />
              </span>
              <p className="text-xs font-medium leading-[21.6px] text-base600">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
