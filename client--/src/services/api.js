import axios from 'axios';

const BASE_URL = 'http://localhost:3000/posts/api';

export async function fetchPosts() {
  const res = await axios.get(`${BASE_URL}/getAllPost`);
  return res.data;
}

export async function createPost(postData) {
  const res = await axios.post(`${BASE_URL}/addPost`, postData);
  return res.data;
}

export async function updatePost(id, postData) {
  const res = await axios.put(`${BASE_URL}/updatePost/${id}`, postData);
  return res.data;
}

export async function deletePost(id) {
  const res = await axios.delete(`${BASE_URL}/deletePost/${id}`);
  return res.data;
} 