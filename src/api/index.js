import { get, post, put } from "./config";

export const login = (data) => {
  return post("/auth/login", {}, data);
};

export const getUserDetails = () => {
  return get("/user/user-details");
};

export const getContactUsRequests = (params) => {
  return get(`/contact-us?status=${params?.status}`);
};

export const getServices = () => {
  return get("/services");
};

export const createServiceRequest = (data) => {
  return post("/service-request", {}, data);
};

export const getServiceRequests = () => {
  return get("/service-request");
};

export const updateServiceRequest = (params, data) => {
  return put(`/service-request/${params?.requestId}/update`, {}, data);
};
