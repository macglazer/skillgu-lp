import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

type ResponseData = {
  value: string
  label: string
}[]

export const fetchCategories = async (): Promise<ResponseData> => {
  try {
    const response = await axios.get(
      'https://api.skillgu.com/api/1.0/mentors/categories',
    )
    return response.data
  } catch (error) {
    console.error('Error fetching categories:', error)
    throw error
  }
}
