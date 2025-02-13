import axios from 'axios'
import * as https from "https";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

type ResponseData = {
  value: string
  label: string
}[]

const agent = new https.Agent({
  rejectUnauthorized: false, // Tymczasowo ignoruj błędy certyfikatów
  servername: 'api.skillgu.com', // Wymuś poprawny SNI
});

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || 'https://api.skillgu.com';

export const fetchCategories = async (): Promise<ResponseData> => {
  try {
    const response = await axios.get('/api/1.0/mentors/categories', {
      httpsAgent: agent,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};