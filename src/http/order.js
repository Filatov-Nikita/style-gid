import axios from './helpers/axios';

export function create(token, body) {
  return axios.post(
    'account/save/stylist',
    body,
    { headers: { 'Authorization': 'Bearer ' + token } },
  );
}
