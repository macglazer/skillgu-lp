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

export const fetchAllMembers = async (): Promise<ResponseData> => {
  try {
    // TODO
    //     const response = await axios.get(
    //       '/api/members/,
    //     )

    //const { mentors } = response.data
    //return mentors;
    const members = [
      {
        avatar_url:
          'https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg',
        description:
          'Jestem UI Designerem z 10-letnim doświadczeniem, lorem ipsum dolor sit amet consectetur.',
        id: '1',
        name: 'Anna Stokrotka',
        title: 'CEO Skillguru',
        username: 'anna_stokrotka',
        socials: {
          skillgu: 'https://www.skillgu.com/',
          linkedin: 'https://www.linkedin.com/',
        },
      },
      {
        avatar_url:
          'https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg',
        description:
          'Jestem UI Designerem z 10-letnim doświadczeniem, lorem ipsum dolor sit amet consectetur. lorem ipsum dolor sit amet consectetur',
        id: '2',
        name: 'Radek Maj',
        title: 'Frontend Developer',
        username: 'rob_maj',
        socials: {
          skillgu: '',
          linkedin: 'https://www.linkedin.com/',
        },
      },
      {
        avatar_url:
          'https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg',
        description:
          'Jestem UI Designerem z 10-letnim doświadczeniem, lorem ipsum dolor sit amet consectetur.',
        id: '3',
        name: 'Radek Maj',
        title: 'Frontend Developer',
        username: 'rob_maj',
        socials: {
          skillgu: '',
          linkedin: 'https://www.linkedin.com/',
        },
      },
      {
        avatar_url:
          'https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg',
        description:
          'Jestem UI Designerem z 10-letnim doświadczeniem, lorem ipsum dolor sit amet consectetur.',
        id: '4',
        name: 'Jan Mus',
        title: 'Frontend Developer',
        username: 'rob_maj',
        socials: {
          skillgu: '',
          linkedin: 'https://www.linkedin.com/',
        },
      },
      {
        avatar_url:
          'https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg',
        description:
          'Jestem UI Designerem z 10-letnim doświadczeniem, lorem ipsum dolor sit amet consectetur.',
        id: '5',
        name: 'Jan Mus',
        title: 'Java Developer',
        username: 'rob_maj',
        socials: {
          skillgu: '',
          linkedin: 'https://www.linkedin.com/',
        },
      },
      {
        avatar_url:
          'https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg',
        description:
          'Jestem UI Designerem z 10-letnim doświadczeniem, lorem ipsum dolor sit amet consectetur.',
        id: '6',
        name: 'Jan Mus',
        title: 'Frontend Developer',
        username: 'rob_maj',
        socials: {
          skillgu: '',
          linkedin: 'https://www.linkedin.com/',
        },
      },
    ]
    return {
      members,
      total: 10,
    }
  } catch (error) {
    console.error('Error fetching mentors:', error)
    throw error
  }
}
