import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000"
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  put(endpoint, body) {
    return axiosInstance.put(`${endpoint}/${body.id}`, {
      ...body,
      ...{ read: !body.read }
    });
  }
};
