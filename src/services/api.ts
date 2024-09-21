import axios, {AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import {toast} from 'react-toastify';
import {getToken} from './token';
import {StatusCodes} from 'http-status-codes';

type DetailMessageType = {
  type: string;
  message: string;
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: false,
  [StatusCodes.NOT_FOUND]: false
};

const shouldDisplayError = (response: AxiosResponse) => Boolean(StatusCodeMapping[response.status]);

const BACKEND_URL = 'https://16.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    }
  );

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError<DetailMessageType>) => {
      // Зачем тут такие костыли? Мне захотелось, чтобы toast.warn срабатывал не всегда
      // При старте приложения идет запрос на проверку login и favorite. Там всегда ошибки,
      // если пользователь незалогинен. Нет смысла показывать эти ошибки
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = (error.response.data);
        toast.warn(detailMessage.message);
      }

      throw error;
    }
  );

  return api;
};
