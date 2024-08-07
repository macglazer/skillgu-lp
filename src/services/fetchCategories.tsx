import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

type ResponseData = {
  value: string
  label: string
}[]

export const fetchCategories = async (): Promise<ResponseData> => {
  try {
    const response = await axios.get(
      'http://185.25.148.129:8081/api/mentor/get-all-mentor-category',
    )
    return response.data
  } catch (error) {
    console.error('Error fetching categories:', error)
    throw error
  }
}
