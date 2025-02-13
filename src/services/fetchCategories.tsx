import axios from 'axios'
import * as https from "https";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

type ResponseData = {
  value: string
  label: string
}[]


const agent = new https.Agent({
  rejectUnauthorized: false,
  servername: 'api.skillgu.com',
});

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || 'https://api.skillgu.com';
axios.defaults.httpsAgent = agent;

export const fetchCategories = async (): Promise<ResponseData> => {
  try {
    const response = await axios.get('/api/1.0/mentors/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};
