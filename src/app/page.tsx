import {
  CtaBanner,
  Faq,
  Features,
  HeroBanner,
  MentorsList,
  Reviews,
} from '@/app/_components'

export default function HomePage() {
  return (
    <div>
      <HeroBanner />
      <Features />
      <MentorsList />
      <Reviews />
      <Faq />
      <CtaBanner />
    </div>
  )
}
