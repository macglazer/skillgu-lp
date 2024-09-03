import { Route } from 'next'
import Link from 'next/link'

import { Linkedin } from '@/ui/icons/Linkedin'
import { Skillgu } from '@/ui/icons/Skillgu'
import { ProfileImage } from '@/ui/ProfileImage'

import { Member } from '@/services/fetchTeamMembers'

export const TeamMemberCard = ({
  avatar_url,
  description,
  name,
  title,
  socials,
}: Member) => {
  return (
    <article className="m-auto flex max-w-sm flex-col gap-3 rounded-3xl md:m-0">
      <div>
        <ProfileImage
          alt={`${name} profile image`}
          src={avatar_url}
          className="max-h-[253px] w-full lg:max-h-[310px]"
        />
      </div>
      <div>
        <div className="flex items-start justify-between">
          <h4 className="py-2 text-xl font-bold lg:text-[28px] lg:leading-[32px] lg:tracking-[-1px]">
            {name}
          </h4>
          <div className="flex gap-2">
            {socials.skillgu ? (
              <Link
                href={socials.skillgu as Route}
                aria-label="go to Skillgu gprofile"
              >
                <Skillgu />
              </Link>
            ) : null}
            {socials.linkedin ? (
              <Link
                href={socials.linkedin as Route}
                aria-label="go to linkedin profile"
              >
                <Linkedin />
              </Link>
            ) : null}
          </div>
        </div>
        <p className="text-xs font-semibold leading-6 text-secondary lg:text-base lg:leading-7">
          {title}
        </p>
      </div>
      <p className="text-14px font-medium leading-[25px] text-base600 lg:text-base lg:leading-7">
        {description}
      </p>
    </article>
  )
}
