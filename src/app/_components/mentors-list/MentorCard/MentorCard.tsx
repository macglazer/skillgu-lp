import { Star } from '@/ui/icons/Star'
import { ProfileImage } from '@/ui/ProfileImage'

import { getReviewText } from '../helpers'

export type Mentor = {
  avatar_url: string
  description: string
  id: string
  name: string
  company: string
  profession: string
  reviewsAvgRate: number
  reviewsCount: number
  special: string
  title: string
  username: string
}

export const MentorCard = ({
  avatar_url,
  description,
  id,
  name,
  company,
  profession,
  reviewsAvgRate,
  reviewsCount,
  special,
  title,
  username,
}: Mentor) => {
  return (
    <div className="m-auto flex max-w-md flex-col gap-3 rounded-3xl border border-base200 p-5">
      <div className="relative">
        <ProfileImage alt={`${name} profile image`} src={avatar_url} />
        {special ? (
          <p className="absolute left-2 top-2 rounded-3xl bg-success200 px-4 py-1 text-xs font-semibold text-success100">
            {special}
          </p>
        ) : null}
      </div>
      <div>
        <div className="mb-1 flex items-center justify-between">
          <h4 className="text-14px font-semibold">{name}</h4>
          <div className="flex items-center justify-between gap-1 text-xs">
            <Star />
            <p className="font-semibold">{reviewsAvgRate}</p>
            <p className="font-medium text-base600">{`(${reviewsCount} ${getReviewText(reviewsCount)})`}</p>
          </div>
        </div>
        <p className="text-xs font-medium leading-5 text-base600">{title}</p>
      </div>
      <p className="text-xs font-medium leading-5 text-base600">
        {description}
      </p>
    </div>
  )
}
