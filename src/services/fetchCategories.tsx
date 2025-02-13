import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

type ResponseData = {
  value: string
  label: string
}[]

// export const fetchCategories = async (): Promise<ResponseData> => {
//   try {
//     const response = await axios.get('/api/1.0/mentors/categories'.trim());
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching categories:', error);
//     throw error;
//   }
// }

export const fetchCategories = async (): Promise<ResponseData> => {
  try {
    const response = await axios.get('https://api.skillgu.com/api/1.0/mentors/categories', {
      headers: {
        Host: 'api.skillgu.com' // Wymuszenie poprawnego SNI (Server Name Indication)
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}

