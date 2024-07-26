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
    <>
      <HeroBanner />
      <Features />
      <MentorsList />
      <Reviews />
      <Faq />
      <CtaBanner />
    </>
  )
}
