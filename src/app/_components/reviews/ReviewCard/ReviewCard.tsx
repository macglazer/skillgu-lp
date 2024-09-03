import Link from 'next/link'

import { Star } from '@/ui/icons/Star'
import { ProfileImage } from '@/ui/ProfileImage'

import { ResponseData } from '@/services/fetchReviews'
import { Paths } from '@/app/paths'
interface ReviewCardPropType {
  review: ResponseData
  modal?: boolean
}

export const ReviewCard = ({ review, modal }: ReviewCardPropType) => {
  const { id, authorName, content, rate, mentor } = review
  return (
    <div className="m-auto flex h-full w-full max-w-md flex-col items-start justify-start gap-3">
      <div
        className={`flex items-start justify-center gap-4 ${modal ? 'order-2 [-webkit-order:2]' : ''} md:order-2 md:[-webkit-order:2]`}
      >
        <ProfileImage
          className="h-12 w-12 rounded-full"
          alt={`${mentor?.name} image`}
          src={mentor.avatar_url}
        />
        <div>
          <h4 className="mb-2 text-14px font-semibold leading-[25px]">
            Opinia o {mentor.name}
          </h4>
          <p className="text-xs font-medium leading-5 text-base600">
            {mentor.title}
          </p>
        </div>
      </div>
      <div
        className={`h-full w-full rounded-3xl ${modal ? '' : 'border border-base200 p-5'} `}
      >
        <div className="mb-3 flex items-center gap-3">
          <p
            className={` ${modal ? 'text-lg' : 'text-14px'} font-semibold leading-[25px]`}
          >
            {`${authorName} ocenił(a) na`}
          </p>
          <div className="flex items-center gap-1">
            <Star />
            <span
              className={`${modal ? 'text-lg' : 'text-14px'} font-semibold`}
            >
              {rate}
            </span>
          </div>
        </div>
        <div className="flex gap-2 text-xs">
          {content.length > 260 && !modal ? (
            <p className="grow flex-wrap font-medium leading-[21.6px] text-base600">
              {`${content.slice(0, 260)}...`}{' '}
              <Link
                scroll={false}
                href={`${Paths.HOME}?reviewId=${id}`}
                className="cursor-pointer font-semibold text-secondary"
              >
                Pokaż więcej
              </Link>
            </p>
          ) : (
            <p className="grow flex-wrap text-xs font-medium leading-[21.6px] text-base600">
              {content}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
