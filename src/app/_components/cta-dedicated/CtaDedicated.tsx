import { Banner } from '@/ui/Banner/Banner'
import clx from 'classnames'

export const CtaDedicated = () => {
  return (
    <div className={clx('py-88px')}>
      <div className="m-auto px-5 flex flex-col md:flex-row max-w-[1304px] justify-between gap-8">
        <Banner type="mentor" />
        <Banner type="mentee" />
      </div>
    </div>
  )
}
