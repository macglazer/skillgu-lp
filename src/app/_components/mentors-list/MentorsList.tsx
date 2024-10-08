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
        <section id="mentors-section" className="m-auto flex w-full max-w-xl flex-col gap-10 p-[44px] px-5 sm:max-w-fit lg:max-w-[1304px]">  {/* Identyfikator dodany tutaj */}
            <div>
                <h3 className="mb-4 text-center text-[28px] font-bold leading-[42px] lg:text-32px lg:leading-[48px]">
                    {`100+ mentorów w ${categories.length} kategoriach`}
                </h3>
                <p className="m-auto max-w-2xl p-3 text-center text-[14px] font-medium leading-6 text-base600 lg:text-base lg:leading-7">
                    Wybierz kategorię, sprawdź opinie innych i zacznij już teraz!
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

            <div className="m-auto grid w-fit grid-cols-1 justify-center gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {mentors?.map((item: Mentor) => (
                    <MentorCard
                        key={item.id}
                        avatar_url={item.avatar_url}
                        description={item.description}
                        name={item.name}
                        company={item.company}
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
                className="link-primary-rounded m-auto block px-8 py-[14px] text-base font-[600]"
            >
                Pokaż wszystkich mentorów
            </Link>
        </section>
    )
}
