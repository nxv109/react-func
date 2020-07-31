import axios from 'axios';

import webStorage from 'helpers/webStorage';
import { APP_KEYS, ROUTES } from 'constants/index';
import { ERROR_CODES } from './constants';

const config = {
  baseURL: 'http://localhost:5000/api',
  timeout: 60000,
};

const appAxios = axios.create(config);

const createToken = token => `${token}`;

// const accessToken = webStorage.get(APP_KEYS.ACCESS_TOKEN);
let isRefreshing = false;
let failedQueue = [];

function addFailedQueue(cb) {
  failedQueue.push(cb);
}

function processFailedQueue(token) {
  failedQueue.map(cb => cb(token));
  failedQueue = [];
}

function reloadApp() {
  webStorage.remove(APP_KEYS.ACCESS_TOKEN);
  webStorage.remove(APP_KEYS.REFRESH_TOKEN);

  window.location.replace(ROUTES.LOGIN);
}

appAxios.interceptors.request.use(function(config) {
  config.headers.Authorization = createToken(webStorage.get(APP_KEYS.ACCESS_TOKEN));

  return config;
}, function(error) {
  console.log(error);
  return Promise.reject(error);
});

appAxios.interceptors.response.use(
  response => response,
  async error => {
    const {
      config: originalRequest,
      response: { status },
    } = error;

    if (ERROR_CODES.UNAUTHORIZED === status) {
      const refreshToken = webStorage.get(APP_KEYS.REFRESH_TOKEN);

      if (!refreshToken) {
        reloadApp();
        return Promise.reject(error);
      }

      if (isRefreshing === false) {
        isRefreshing = true;

        console.log('asdsad');

        axios({
            ...config,
            method: 'post',
            url: '/auth/refresh-token',
            headers: {
              Authorization: createToken(refreshToken),
            },
          })
          .then(({ data }) => {
            const newAccessToken = data.accessToken;
            const newRefreshToken = data.refreshToken;

            webStorage.set(APP_KEYS.ACCESS_TOKEN, newAccessToken);
            webStorage.set(APP_KEYS.REFRESH_TOKEN, newRefreshToken);

            isRefreshing = false;

            processFailedQueue(newAccessToken?.token);
          })
          .catch(() => {
            reloadApp();
            return Promise.reject(error);
          });
      }

      return new Promise(resolve => {
        addFailedQueue(newToken => {
          originalRequest.headers.Authorization = createToken(newToken);

          resolve(appAxios(originalRequest));
        });
      });
    }

    if (ERROR_CODES.FORBIDDEN === status) {
      window.location.replace(ROUTES.HOME);
      // reloadApp();
      return Promise.reject(error);
    }

    return Promise.reject(error);
  });

export default appAxios;