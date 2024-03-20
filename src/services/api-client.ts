import axios, { AxiosInstance } from 'axios';

const BACKEND_URL = 'https://ixora-auto.ru/wipers';
const REQUEST_TIMEOUT = 5000;

export const createApiClient = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};
