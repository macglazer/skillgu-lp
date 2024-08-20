import Link from 'next/link'
import { Route } from 'next'

import { Star } from '@/ui/icons/Star'
import { ProfileImage } from '@/ui/ProfileImage'

import { getReviewText } from '../helpers'
import { Paths } from '@/app/paths'

export type Mentor = {
  avatar_url: string
  description: string
  name: string
  company: string
  reviewsAvgRate: number
  reviewsCount: number
  special: string
  title: string
  username: string
}

export const MentorCard = ({
  avatar_url,
  description,
  name,
  reviewsAvgRate,
  reviewsCount,
  special,
  title,
  username,
}: Mentor) => {
  return (
    <Link
      className="m-auto flex max-w-md flex-col gap-3 rounded-3xl border border-base200 p-5"
      href={`${Paths.MENTORPROFILE}/${username}` as Route}
    >
      <div className="relative">
        <ProfileImage
          alt={`${name} profile image`}
          src={avatar_url}
          className="max-h-[200px] w-full"
        />
        {special ? (
          <p className="absolute left-2 top-2 rounded-3xl bg-success200 px-4 py-1 text-xs font-semibold text-success100">
            {special}
          </p>
        ) : null}
      </div>
      <div>
        <div className="mb-1 flex items-center justify-between">
          <h4 className="text-14px font-semibold">{name}</h4>
          {reviewsCount ? (
            <div className="flex items-center justify-between gap-1 text-xs">
              <Star />
              <p className="font-semibold">{reviewsAvgRate}</p>
              <p className="font-medium text-base600">{`(${reviewsCount} ${getReviewText(reviewsCount)})`}</p>
            </div>
          ) : null}
        </div>
        <p className="text-xs font-medium leading-5 text-base600">{title}</p>
      </div>
      <p className="text-xs font-medium leading-5 text-base600">
        {description}
      </p>
    </Link>
  )
}
