// src/services/api.js
const BASE_URL = 'http://localhost:5000/api';

export async function pingServer() {
  const res = await fetch(`${BASE_URL}/ping`);
  const data = await res.json();
  return data;
}
