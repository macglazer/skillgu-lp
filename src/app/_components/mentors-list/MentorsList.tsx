import { fetchMentorFilteredList } from '@/services/fetchMentors'
import { MentorCard } from './MentorCard'
import { type Metadata } from 'next'
import { fetchCategories } from '@/services/fetchCategories'
import Link from 'next/link'
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

export const MentorsList = async () => {
  const categories = await fetchCategories()

  if (categories) return
  const data = await fetchMentorFilteredList({
    categories: [categories[0]],
  })

  if (!data) return
  const { mentors } = data

  return (
    <section className="m-auto w-full max-w-xl p-[44px] px-5 md:max-w-fit lg:max-w-[1304px]">
      {/* TODO - no categories */}
      <h3 className="mb-4 text-center text-xl font-bold leading-[26px] lg:text-32px lg:leading-[48px]">
        100+ mentorów w 6 kategoriach
      </h3>
      <p className="m-auto max-w-2xl p-3 text-center text-[14px] font-medium leading-6 text-base600 lg:text-base lg:leading-7">
        Lorem ipsum dolor sit amet consectetur. Duis sagittis pharetra
        sollicitudin tincidunt.
      </p>
      <div></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
        {/* {!error && (pending || hasNextPage) ? (
          <div ref={pending ? undefined : sentryRef}>
            <MentorListingCardSkeleton />
          </div>
        ) : null}
        {error && (
          <div className={styles.errorMsg}>
            <p>{error}</p>
          </div>
        )} */}
      </div>
      <Link
        href={Paths.MENTORS}
        className="m-auto mb-12 block w-[180px] rounded-xl bg-secondary py-[14px] text-center text-14px font-[600] text-base000"
      >
        Pokaż wszystkich mentorów
      </Link>
    </section>
  )
}
