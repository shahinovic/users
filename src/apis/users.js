import axios from "axios";

const API_BASE_URL = "https://602e7c2c4410730017c50b9d.mockapi.io";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchUsers = () => {
  return api.get("/users");
};
