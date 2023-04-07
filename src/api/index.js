import { get, post } from "./config";

export const login = (data) => {
  return post("/auth/login", {}, data);
};

export const getUserDetails = () => {
  return get("/user/user-details");
};
