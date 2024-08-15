import { TeamMemberCard } from '../_components/TeamMemberCard'
import { fetchAllMembers, Member } from '@/services/fetchAllMembers'

const Blog = async () => {

  return (
    <section className="m-auto flex w-full max-w-xl flex-col gap-10 p-[44px] px-5 md:max-w-fit lg:max-w-[1304px]">
      <h3 className="semibold text-[28px] font-bold leading-[42px] lg:text-[48px] lg:leading-[72px]">
        Blog
      </h3>
       <p className='text-lg text-base800 font-medium'>Strona w budowie</p>
    </section>
  )
}

export default Blog
