import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

export const fetchCategories = async () => {
  try {
    // TODO
    // const response = await axios.get('/api/mentor/get-all-category')
    // console.log(response)
    //  return response.data
    return [
      { value: '1', label: 'Design' },
      { value: '2', label: 'Biznes' },
      { value: '3', label: 'Kariera' },
      { value: '4', label: 'IT' },
      { value: '5', label: 'Marketing' },
      { value: '6', label: 'Rozwój osobisty' },
    ]
  } catch (error) {
    console.error('Error fetching categories:', error)
    throw error
  }
}
