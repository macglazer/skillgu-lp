import clx from 'classnames'

type Props = {
  type: 'mentor' | 'mentee'
  className?: string
}

const data = {
  mentor: {
    title: 'Czym jest Skillgu?',
    description:
      'Skillgu to platforma stworzona z myślą o tysiącach mentorów, trenerów i osób, chcących wymieniać wiedzę oraz doświadczenia online. ',
    subtitle: 'Dla mentee',
    trades: [
      'Technicznej',
      'Programowania',
      'Rozwoju Startupów',
      'Biznesu',
      'Marketingu',
      'UX/UI Designu',
      'Zarządzania Projektami',
    ],
  },
  mentee: {
    title: 'Czym jest Skillgu?',
    description:
      'Skillgu to platforma stworzona z myślą o tysiącach mentorów, trenerów i osób, chcących wymieniać wiedzę oraz doświadczenia online. ',
    subtitle: 'Dla mentee',
    trades: [
      'Technicznej',
      'Programowania',
      'Rozwoju Startupów',
      'Biznesu',
      'Marketingu',
      'UX/UI Designu',
      'Zarządzania Projektami',
    ],
  },
}

export const AboutSkillgu = ({ type, className }: Props) => {
  return (
    <div className={clx('mb-6 mt-4 w-full md:w-[50%]', className)}>
      <p className="mb-5 max-w-[600px] text-4xl font-bold leading-[56px] tracking-tight text-primary lg:text-48px lg:leading-[84px]">
        {data[type].title}
      </p>
      <p className="mb-5 text-14px font-medium leading-6 text-base600 lg:text-base lg:leading-[28.8px]">
        {data[type].description}
      </p>
      <div className="mt-10 md:mt-4">
        <strong className="mb-6 inline-block text-xl font-bold leading-6">
          Stawiamy głównie na tematykę z branży
        </strong>
        <ul className="flex flex-wrap gap-3">
          {data[type].trades.map((item) => (
            <li key={item}>
              <p className="rounded-full bg-base200 px-6 py-[10px] text-14px font-semibold leading-[25.2px]">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
