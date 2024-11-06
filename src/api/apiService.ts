import axios from 'axios'; 
import { Provider } from '../types/ApiTypes'; 


export const fetchProviders = async (): Promise<Provider[]> => {
  try {
    // Replace with your actual API endpoint URL
    const response = await axios.get('https://api.apis.guru/v2/providers.json');

    // Mapping over the response data to match the Provider type
    return Object.keys(response.data).map((key) => ({
      name: key,
      url: response.data[key].url,
    }));
  } catch (error) {
    console.error('Error fetching providers:', error);
    throw new Error('Failed to load providers');
  }
};
