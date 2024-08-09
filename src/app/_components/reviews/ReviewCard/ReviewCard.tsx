import { Paths } from '@/app/paths'
import { ResponseData } from '@/services/fetchReviews'
import { Star } from '@/ui/icons/Star'
import { ProfileImage } from '@/ui/ProfileImage'
import Link from 'next/link'

export const ReviewCard = ({
  id,
  authorName,
  content,
  rate,
  mentor,
}: ResponseData) => {
  return (
    <div className="m-auto flex h-full w-full max-w-md flex-col items-start justify-start gap-3">
      <div className="flex items-start justify-center gap-4 md:order-2">
        <ProfileImage
          className="h-12 w-12 rounded-full"
          alt={`${mentor.name} image`}
          src={mentor.avatar_url}
        />
        <div>
          <h4 className="mb-2 text-14px font-semibold leading-[25.2px]">
            Opinia o {mentor.name}
          </h4>
          <p className="text-xs font-medium leading-5 text-base600">
            {mentor.title}
          </p>
        </div>
      </div>
      <div className="h-full w-full rounded-3xl border border-base200 p-5">
        <div className="flex gap-3">
          <p className="mb-3 text-14px font-semibold leading-[25.2px]">
            {`${authorName} ocenił(a) na`}
          </p>
          <div className="flex gap-1">
            <Star />
            <span className="text-14px font-semibold"> {rate}</span>
          </div>
        </div>
        <div className="flex gap-2 text-xs">
          {content.length > 300 ? (
            <p className="grow flex-wrap font-medium leading-[21.6px] text-base600">
              {`${content.slice(0, 300)}...`}{' '}
              <Link
                href="/"
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
