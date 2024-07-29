import { Paths } from '@/app/paths'
import Link from 'next/link'

export const HeroBanner = () => {
  return (
    <section className="mx m-auto my-24 max-w-2xl px-5">
      <h3 className="hidden">Skillgu home page</h3>
      <p className="mb-8 text-center text-32px font-bold leading-[48px] tracking-[-1px] text-primary lg:text-48px lg:leading-72px lg:tracking-[-2px]">
        Osiągaj swoje cele szybciej z{' '}
        <span className="font-artist italic text-secondary">1:1</span>{' '}
        mentoringiem
      </p>
      <Link
        href={Paths.MENTORS}
        className="m-auto mb-12 block w-[180px] rounded-xl bg-secondary py-[14px] text-center text-14px font-[600] text-base000"
      >
        Znajdź mentora
      </Link>
      <div className="h-[407px] rounded-3xl border"></div>
    </section>
  )
}
