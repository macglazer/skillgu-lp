import { TeamMemberCard } from '../_components/TeamMemberCard'
import { fetchAllMembers, Member } from '@/services/fetchAllMembers'

const About = async () => {
  const { members } = await fetchAllMembers()

  if (!members) return

  return (
    <section className="m-auto flex w-full max-w-xl flex-col gap-10 p-[44px] px-5 md:max-w-fit lg:max-w-[1304px]">
      <h3 className="semibold text-[28px] font-bold leading-[42px] lg:text-[48px] lg:leading-[72px]">
        O nas
      </h3>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 align-top">
        {members?.map((item: Member) => (
          <TeamMemberCard
            key={item.id}
            avatar_url={item.avatar_url}
            description={item.description}
            name={item.name}
            id={item.id}
            title={item.title}
            username={item.username}
            socials={item.socials}
          />
        ))}
      </div>
    </section>
  )
}

export default About
