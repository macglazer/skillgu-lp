import {
  CtaDedicated,
  Faq,
  Features,
  HeroBanner,
  MentorsList,
  Reviews,
} from '@/app/_components'

type HomePageType = {
  readonly searchParams: {
    cat: string
    reviewId: string
  }
}
export default function HomePage({ searchParams }: HomePageType) {
  const currentCategory = searchParams.cat?.toString() ?? ''
  const reviewId = searchParams?.reviewId?.toString() ?? ''

  return (
    <>
      <HeroBanner />
      <Features />
      <MentorsList currentCategory={currentCategory} />
      <Reviews reviewId={reviewId} />
      <Faq />
      <CtaDedicated />
    </>
  )
}
