import { Paths } from '@/app/paths'

type BannerPropsTypes = {
  type: 'mentor' | 'mentee'
}
const data = {
  mentor: {
    title: 'Dla mentorów',
    description:
      'Jeśli wciąż rozwijasz bazę swoich uczniów i chcesz zarabiać więcej to platforma Skillgu jest dla Ciebie. U nas znajdziesz tylko takich mentee, którzy są zainteresowani Twoimi skillami, bo stawiamy na branżowe specjalizacje techniczne.',
    button: {
      link: Paths.REGISTER,
      text: 'Zostań mentorem',
    },
  },
  mentee: {
    title: 'Dla mentee',
    description:
      'Na Skillgu łatwo znajdziesz mentora, który najlepiej spełnia Twoje oczekiwania. Zaawansowane dopasowanie pomoże Ci znaleźć eksperta z odpowiednim doświadczeniem, wiedzą i stylem pracy, który idealnie do Ciebie pasuje.',
    button: {
      link: Paths.MENTORS,
      text: 'Znajdź mentora',
    },
  },
}

export const Banner = ({ type }: BannerPropsTypes) => {
  return (
    <div className="flex w-full flex-col rounded-[20px] border border-base400 bg-secondary/[2%] p-10 md:w-[50%] lg:max-w-[610px] lg:gap-4">
      <h3 className="text-3xl font-bold leading-72px tracking-tight text-secondary lg:text-48px">
        {data[type].title}
      </h3>
      <p className="flex-grow text-14px font-medium leading-6 text-base600 md:max-w-[480px] lg:text-base lg:leading-[28.8px]">
        {data[type].description}
      </p>
      <a
        href={data[type].button.link}
        className={`${type === 'mentee' ? 'link-primary-rounded' : 'link-secondary-rounded'} text-14 mt-6 inline-block px-32px py-[18px]`}
      >
        {data[type].button.text}
      </a>
    </div>
  )
}
