import axios from "axios";
const url = "http://localhost:8000";

export const getData = () => {
  return axios.get(`${url}/NotionAPIGet`);
};