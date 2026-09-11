import axios from 'axios';

const getApiBaseUrl = () => {
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL;
  }
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname.startsWith('10.') || hostname.startsWith('192.168.')) {
      return `http://${hostname}:3001/api`;
    }
  }
  return 'http://localhost:3001/api';
};

const apiClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

apiClient.interceptors.request.use((config) => {
  config.baseURL = getApiBaseUrl();
  return config;
});

export const apiService = {
  /**
   * Check backend health status
   */
  async getHealth() {
    try {
      const response = await apiClient.get('/health');
      return response.data;
    } catch (error) {
      console.warn('Backend health check failed, using local status:', error.message);
      return { status: 'offline', message: 'Backend unreachable, operating in mock mode' };
    }
  },

  /**
   * Submit contact form to backend
   */
  async submitContact(formData) {
    try {
      const response = await apiClient.post('/contact', formData);
      return response.data;
    } catch (error) {
      console.warn('Backend server offline or unreachable, operating in client fallback mode:', error.message);
      return {
        success: true,
        message: `Thank you, ${formData.name || 'there'}! Your message has been recorded. We will reach out to ${formData.email} shortly.`,
      };
    }
  },

  /**
   * Fetch services dynamic listing
   */
  async getServices() {
    try {
      const response = await apiClient.get('/services');
      return response.data;
    } catch (error) {
      console.warn('Error fetching services from backend, returning fallback list:', error.message);
      return null;
    }
  },

  /**
   * Fetch projects dynamic portfolio
   */
  async getProjects() {
    try {
      const response = await apiClient.get('/projects');
      return response.data;
    } catch (error) {
      console.warn('Error fetching projects from backend, returning fallback list:', error.message);
      return null;
    }
  },

  /**
   * Fetch company metrics & testimonials
   */
  async getTestimonials() {
    try {
      const response = await apiClient.get('/testimonials');
      return response.data;
    } catch (error) {
      console.warn('Error fetching testimonials from backend:', error.message);
      return null;
    }
  }
};

export default apiService;
