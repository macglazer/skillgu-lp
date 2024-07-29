import {
  CtaBanner,
  Faq,
  Features,
  HeroBanner,
  MentorsList,
  Reviews,
} from '@/app/_components'

type HomePageType = {
  readonly searchParams: { [key: string]: string | string[] }
}
export default function HomePage({ searchParams }: HomePageType) {
  const currentCategory = searchParams.cat?.toString() ?? ''
  return (
    <>
      <HeroBanner />
      <Features />
      <MentorsList currentCategory={currentCategory}/>
      <Reviews />
      <Faq />
      <CtaBanner />
    </>
  )
}
