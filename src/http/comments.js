import axios from './helpers/axios';

export function all() {
  return axios.get('account/stylist/4/comments');
}

export function show(commentId) {
  return axios.get(`account/stylist/comment/${commentId}`);
}

export function showLast() {
  return axios.get(`account/stylist/comment`);
}

export function create(body) {
  return axios.post(`account/save/stylist/comment`, body);
}

export function remove(body) {
  return axios.post(`account/delete/stylist/comment`, body);
}
