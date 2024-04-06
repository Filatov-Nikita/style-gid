import axios from './helpers/axios';

export function create(body) {
  return axios.post('account/save/stylist', body);
}
