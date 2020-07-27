import {create} from 'axios';
import {store} from '../redux/store';

const getToken = () => {
  const state = store.getState();
  const {token} = state.auth;

  return token;
};

/**
 * Interacts with the Aktiviti API
 * @param {Object} requestConfig Request configuration
 * @param {'post'|'get'|'delete'|'put'|'options'} requestConfig.method HTTP verb
 * @param {String} requestConfig.url HTTP verb
 * @param {Object} requestConfig.headers HTTP http header
 * @param {Object} requestConfig.data data to send to backend
 * @return {Promise<{ data, headers, status, statusText, config }>}
 */

const aktivitiServiceClient = async (requestConfig) =>
  create({
    baseURL: 'http://d2b6ff005410.ngrok.io/api/',
    timeout: 150000,
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken() ? getToken() : '',
    },
  })(requestConfig);

export default aktivitiServiceClient;
