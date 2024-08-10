import { ReviewCard } from './ReviewCard'
import { ModalTemplate } from '@/ui/ModalTemplate/ModalTemplate'

import { fetchReviews } from '@/services/fetchReviews'

export const Reviews = async ({ reviewId }: { reviewId: string }) => {
  const reviews = await fetchReviews()

  if (!reviews) return

  const reviewInModal = reviews.find((item) => item.id === reviewId)

  return (
    <>
      {reviewId && reviewInModal && (
        <ModalTemplate>
          <ReviewCard review={reviewInModal} modal={true} />
        </ModalTemplate>
      )}
      <section className="m-auto flex w-full max-w-xl flex-col gap-10 p-[44px] px-5 md:max-w-fit lg:max-w-[1304px]">
        <h3 className="text-center text-[28px] font-bold leading-[32px] tracking-[-1px] lg:text-32px lg:leading-[48px]">
          Najnowsze opinie
        </h3>
        <p className="m-auto max-w-2xl p-3 text-center text-[14px] font-medium leading-6 text-base600 lg:text-base lg:leading-7">
          Lorem ipsum dolor sit amet consectetur. Duis sagittis pharetra
          sollicitudin tincidunt.
        </p>
        {reviews.length ? (
          <div className="grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2 xl:grid-cols-4">
            {reviews.map((review) => (
              <ReviewCard
                review={review}
                key={`${review.mentor.username}-${review.id} `}
              />
            ))}
          </div>
        ) : (
          <p></p>
        )}
      </section>
    </>
  )
}
