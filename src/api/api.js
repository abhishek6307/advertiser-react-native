import { Platform } from 'react-native';
import axios from 'axios';

const api = axios.create({
  baseURL: Platform.OS === 'android' ? 'http://10.0.2.2:8000/api' : 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
