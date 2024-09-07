import axios from './helpers/axios';

export function all() {
  return axios.get('account/stylist/4/comments');
}

export function show(commentId) {
  const part = commentId ? `/${commentId}` : '';
  return axios.get(`account/stylist/comment${part}`);
}

export function showLast() {
  return axios.get(`account/stylist/comment`);
}

export function create(token, body) {
  return axios.post(
    'account/save/stylist/comment',
    body,
    { headers: { 'Authorization': 'Bearer ' + token } },
  );
}

export function remove(body) {
  return axios.post(`account/delete/stylist/comment`, body);
}
