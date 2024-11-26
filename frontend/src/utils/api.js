import axios from "axios";

const API_URL = "http://localhost:3015"; // Replace with your backend URL

export const getCheckins = async () => {
  return axios.get(`${API_URL}/checkins`);
};

export const addCheckins = async (data) => {
  return axios.post(`${API_URL}/checkins`, data);
};

export const updateCheckins = async (id, data) => {
  return axios.put(`${API_URL}/checkins/${id}`, data);
};

export const deleteCheckins = async (id) => {
  return axios.delete(`${API_URL}/checkins/${id}`);
};
