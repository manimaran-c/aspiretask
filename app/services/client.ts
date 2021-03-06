import APIConfig from 'app/config/APIConfig';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: APIConfig.BASE_URL,
  timeout: 5000,
});

export {apiClient};
