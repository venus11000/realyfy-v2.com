import axios from "axios";

export const post = (url = "", data = {}, headers = {}) => {
  return axios.post(url, data, {
    headers,
  });
};

export const get = (url = "", params = {}, headers = {}) => {
  const paramStr = new URLSearchParams(params).toString();
  const urlStr = url + (paramStr ? `?${paramStr}` : "");
  return axios.get(urlStr, {
    headers,
  });
};
