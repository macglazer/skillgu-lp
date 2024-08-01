import Link from 'next/link'

import { MentorCard } from './MentorCard'
import { ActiveLink } from '@/ui/ActiveLink'

import { fetchCategories } from '@/services/fetchCategories'
import { fetchMentorListByCategoryValue } from '@/services/fetchMentors'
import { Paths } from '@/app/paths'

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

export const MentorsList = async ({
  currentCategory,
}: {
  currentCategory: string
}) => {
  const categories = await fetchCategories()

  if (!categories) return

  const initCategory = categories[0]
  const data = await fetchMentorListByCategoryValue(
    currentCategory || initCategory.value,
  )

  if (!data) return

  const { mentors } = data
  return (
    <section className="m-auto flex w-full max-w-xl flex-col gap-10 p-[44px] px-5 md:max-w-fit lg:max-w-[1304px]">
      <div>
        <h3 className="mb-4 text-center text-[28px] font-bold leading-[42px] lg:text-32px lg:leading-[48px]">
          {`100+ mentorów w ${categories.length} kategoriach`}
        </h3>
        <p className="m-auto max-w-2xl p-3 text-center text-[14px] font-medium leading-6 text-base600 lg:text-base lg:leading-7">
          Lorem ipsum dolor sit amet consectetur. Duis sagittis pharetra
          sollicitudin tincidunt.
        </p>
      </div>
      <div className="flex flex-wrap justify-start gap-2 md:justify-center lg:gap-4">
        {categories.map((item) => (
          <ActiveLink
            initCategory={initCategory.value}
            href={`/?cat=${item.value}`}
            key={item.value}
            className="bg-base200 text-primary"
            activeClassName="text-base000 bg-primary"
          >
            {item.label}
          </ActiveLink>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2 xl:grid-cols-4">
        {mentors?.map((item: Mentor) => (
          <MentorCard
            key={item.id}
            avatar_url={item.avatar_url}
            description={item.description}
            name={item.name}
            id={item.id}
            company={item.company}
            profession={item.profession}
            reviewsAvgRate={item.reviewsAvgRate}
            reviewsCount={item.reviewsCount}
            special={item.special}
            title={item.title}
            username={item.username}
          />
        ))}
      </div>
      <Link
        href={Paths.MENTORS}
        className="m-auto block rounded-xl bg-secondary px-8 py-[14px] text-center text-base font-[600] text-base000"
      >
        Pokaż wszystkich mentorów
      </Link>
    </section>
  )
}
