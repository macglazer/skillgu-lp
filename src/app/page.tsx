import {
  CtaDedicated,
  Faq,
  FeaturesNew,
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
      <FeaturesNew />
      <MentorsList currentCategory={currentCategory} />
      <Reviews reviewId={reviewId} />
      <Faq />
      <CtaDedicated />
    </>
  )
}
