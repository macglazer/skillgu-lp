import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

type ResponseData = {
  members: Member[]
  total: number
}
export type SpecialVariant = 'success' | 'warning' | 'error'
export type Member = {
  avatar_url: string
  description: string
  id: string
  name: string
  title: string
  username: string
  socials: {
    skillgu: string
    linkedin: string
  }
}

export const fetchTeamMembers = async (): Promise<ResponseData> => {
  try {
    // TODO
    //     const response = await axios.get(
    //       '/api/members/,
    //     )

    //const { mentors } = response.data
    //return mentors;
    const members = [
      {
        avatar_url: '/man.svg',
        description:
          'Pomysłodawca, założyciel oraz jeden z programistów Skillgu. Od zawsze planowałem założyć własną firmę, a Skillgu jest realizacją tej wizji. Jako członek zespołu programistycznego, aktywnie uczestniczę w rozwijaniu naszej platformy, łącząc technologię z moją wizją rozwoju kariery. Głęboko wierzę, że praca z mentorami przyspiesza rozwój zawodowy, pomaga w pokonywaniu barier i odblokowywaniu potencjału na każdym etapie kariery.',
        id: '1',
        name: 'Maciej Glazer',
        title: 'Founder Skillgu',
        username: 'Maciekskillgu-1997887680',
        socials: {
          skillgu: 'https://www.skillgu.com/',
          linkedin: 'https://www.linkedin.com/',
        },
      },
      {
        avatar_url: '/man.svg',
        description:
            'Comming soon.',
        id: '2',
        name: 'Nilanchala Panigrahy ',
        title: 'CTO Founder Skillgu',
        username: 'Nilanchala-1997887680',
        socials: {
          skillgu: 'https://www.skillgu.com/',
          linkedin: 'https://www.linkedin.com/',
        },
      },
      {
        avatar_url: '/man.svg',
        description:
          'Radosław współtwórca skillgu.com, świetny teammate oraz senior frontend-developer i team leader z 15 letnim stażem. W Skillgu współodpowiedzialny za front i super atmosferę. Radosław oprócz swoich usług jest również mentorem. Po więcej informacji zapraszamy na profil Radosława',
        id: '4',
        name: 'Radosław Żaczkiewicz',
        title: 'Senior React Developer',
        username: 'rado_ms',
        socials: {
          skillgu: 'https://www.skillgu.com/',
          linkedin:
            'https://www.linkedin.com/in/rados%C5%82aw-%C5%BCaczkiewicz-2534251bb/',
        },
      },
      {
        avatar_url: '/woman.svg',
        description:
          'Małgorzata frontend-developer, współtwórczyni skillgu oraz super koleżanka. Razem z Radosławem trzyma rękę na pulsie przy tworzeniu skillgu. Małgorzata również chętnie pomoże nowicjuszom wejść na rynek IT',
        id: '3',
        name: 'Małgorzata Kowacka',
        title: 'Frontend React Developer',
        username: 'gosia_kow',
        socials: {
          skillgu: 'https://www.skillgu.com/',
          linkedin: 'https://www.linkedin.com/in/malgorzata-kowacka/',
        },
      },
    ]
    return {
      members,
      total: 6,
    }
  } catch (error) {
    console.error('Error fetching mentors:', error)
    throw error
  }
}
