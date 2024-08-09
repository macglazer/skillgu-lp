import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

export type ResponseData = {
  id: string
  authorName: string
  content: string
  createdAt: string
  mentor: Mentor
  rate: number
}
export type Mentor = {
  avatar_url: string
  id: string
  name: string
  username: string
  title: string
}

export const fetchReviews = async (): Promise<ResponseData[]> => {
  try {
    // TODO
    //     const response = await axios.get(
    //       '/api/.....'
    //     )

    //const { reviews } = response.data
    //return reviews;
    const reviews = [
      {
        id: '1',
        authorName: 'Jan Brzoza',
        content: 'Jestem zachwycony! To najlepszy mentor jakiego znam!',
        createdAt: 'string',
        rate: 4,
        mentor: {
          id: '1',
          avatar_url:
            'https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg',

          name: 'Anna Stokrotka',
          username: 'anna_stokrotka',
          title: 'UX/UI Designer w Google',
        },
      },
      {
        id: '2',
        authorName: 'Gosia',
        content:
          'Jestem zachwycona! Pani Ania wykazała się ogromną wiedzą i doświadczeniem w dziedzinie UX. Jej odpowiedzi na moje pytania były precyzyjne i merytoryczne, co bardzo pomogło mi zrozumieć skomplikowane aspekty projektowania doświadczeń.',
        createdAt: 'string',
        rate: 4,
        mentor: {
          id: '2',
          avatar_url:
            'https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg',

          name: 'Anna Stokrotka',
          username: 'anna_stokrotka',
          title: 'Java Software Developer w Google',
        },
      },
      {
        id: '3',
        authorName: 'Jan Brzoza',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde hic deserunt consequatur, saepe quae impedit eum! Eos repudiandae cum ad ducimus praesentium ex sed, totam eaque tenetur vel ea eius voluptates corporis enim voluptatum culpa consequatur repellat exercitationem autem aliquid incidunt magni rerum! Eius, minima quod. Animi mollitia ullam et.Jestem zachwycony! To najlepszy mentor jakiego znam!',
        createdAt: 'string',
        rate: 5,
        mentor: {
          id: '1',
          avatar_url:
            'https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg',

          name: 'Anna Stokrotka',
          username: 'anna_stokrotka',
          title: 'Java Software Developer w Google',
        },
      },
      {
        id: '4',
        authorName: 'Jan Brzoza',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde hic deserunt consequatur, saepe quae impedit eum! Eos repudiandae cum ad ducimus praesentium ex sed, totam eaque tenetur vel ea eius voluptates corporis enim voluptatum culpa consequatur repellat exercitationem autem aliquid incidunt magni rerum! Eius, minima quod. Animi mollitia ullam et.Jestem zachwycony! To najlepszy mentor jakiego znam!',
        createdAt: 'string',
        rate: 4,
        mentor: {
          id: '1',
          avatar_url:
            'https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg',

          name: 'Anna Stokrotka',
          username: 'anna_stokrotka',
          title: 'Java Software Developer w Google',
        },
      },
    ]
    return reviews
  } catch (error) {
    console.error('Error fetching reviews:', error)
    throw error
  }
}
