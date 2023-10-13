/* eslint-disable no-undef */
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const apiPostRegister = async (data) => {
  try {
    const response = await api.post("/auth/register", data);
    const token = response.data.token;
    localStorage.setItem("token", token);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const apiPostLogin = async (data) => {
  try {
    const response = await api.post("/auth/login", data);
    const token = response.data.token;
    localStorage.setItem("token", token);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const apiGetProfil = async () => {
  try {
    const response = await api.get("/user/profile");
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
