import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

type ResponseData = {
  mentors: Mentor[]
  total: number
}
export type SpecialVariant = 'success' | 'warning' | 'error'
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

export const fetchMentorListByCategoryValue = async (
  category: string,
): Promise<ResponseData> => {
  try {
    const filterMentorToSend = {
      take: 8,
      category,
    }
    // TODO
    // POST ???
    //     const response = await axios.post(
    //       '/api/mentor/filtered-mentors',
    //       filterMentorToSend,
    //     )

    //const { mentors } = response.data
    //return mentors;
    const mentors = [
      {
        avatar_url:
          'https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg',
        description:
          'Jestem UI Designerem z 10-letnim doświadczeniem, lorem ipsum dolor sit amet consectetur.',
        id: '1',
        name: 'Anna Stokrotka',
        company: 'Google',
        profession: 'UX/UI',
        reviewsAvgRate: 4.7,
        reviewsCount: 10,
        special: 'Top Mentor',
        title: 'Java Software Developer w Google',
        username: 'anna_stokrotka',
      },
      {
        avatar_url:
          'https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg',
        description:
          'Jestem UI Designerem z 10-letnim doświadczeniem, lorem ipsum dolor sit amet consectetur.',
        id: '2',
        name: 'Stanisław Sójka',
        company: 'Google',
        profession: 'UX/UI',
        reviewsAvgRate: 4.7,
        reviewsCount: 10,
        special: 'Top Mentor',
        title: 'Java Software Developer w Google',
        username: 'staniaslaw_sojka',
      },
      {
        avatar_url:
          'https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg',
        description:
          'Jestem UI Designerem z 10-letnim doświadczeniem, lorem ipsum dolor sit amet consectetur.',
        id: '2',
        name: 'Stanisław Sójka',
        company: 'Google',
        profession: 'UX/UI',
        reviewsAvgRate: 4.7,
        reviewsCount: 10,
        special: 'Top Mentor',
        title: 'Java Software Developer w Google',
        username: 'staniaslaw_sojka',
      },
      {
        avatar_url:
          'https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg',
        description:
          'Jestem UI Designerem z 10-letnim doświadczeniem, lorem ipsum dolor sit amet consectetur.',
        id: '2',
        name: 'Stanisław Sójka',
        company: 'Google',
        profession: 'UX/UI',
        reviewsAvgRate: 4.7,
        reviewsCount: 10,
        special: 'Top Mentor',
        title: 'Java Software Developer w Google',
        username: 'staniaslaw_sojka',
      },
      {
        avatar_url:
          'https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg',
        description:
          'Jestem UI Designerem z 10-letnim doświadczeniem, lorem ipsum dolor sit amet consectetur.',
        id: '2',
        name: 'Stanisław Sójka',
        company: 'Google',
        profession: 'UX/UI',
        reviewsAvgRate: 4.7,
        reviewsCount: 10,
        special: 'Top Mentor',
        title: 'Java Software Developer w Google',
        username: 'staniaslaw_sojka',
      },
      {
        avatar_url:
          'https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg',
        description:
          'Jestem UI Designerem z 10-letnim doświadczeniem, lorem ipsum dolor sit amet consectetur.',
        id: '2',
        name: 'Stanisław Sójka',
        company: 'Google',
        profession: 'UX/UI',
        reviewsAvgRate: 4.7,
        reviewsCount: 10,
        special: 'Top Mentor',
        title: 'Java Software Developer w Google',
        username: 'staniaslaw_sojka',
      },
      {
        avatar_url:
          'https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg',
        description:
          'Jestem UI Designerem z 10-letnim doświadczeniem, lorem ipsum dolor sit amet consectetur.',
        id: '2',
        name: 'Stanisław Sójka',
        company: 'Google',
        profession: 'UX/UI',
        reviewsAvgRate: 4.7,
        reviewsCount: 10,
        special: 'Top Mentor',
        title: 'Java Software Developer w Google',
        username: 'staniaslaw_sojka',
      },
      {
        avatar_url:
          'https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg',
        description:
          'Jestem UI Designerem z 10-letnim doświadczeniem, lorem ipsum dolor sit amet consectetur.',
        id: '2',
        name: 'Stanisław Sójka',
        company: 'Google',
        profession: 'UX/UI',
        reviewsAvgRate: 4.7,
        reviewsCount: 10,
        special: 'Top Mentor',
        title: 'Java Software Developer w Google',
        username: 'staniaslaw_sojka',
      },
    ]
    return {
      mentors,
      total: 10,
    }
  } catch (error) {
    console.error('Error fetching mentors:', error)
    throw error
  }
}
