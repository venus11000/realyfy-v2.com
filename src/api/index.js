import { get, post } from "./config";

export const login = () => {
  return post("/auth/login");
};

export const getUserDetails = () => {
  return get("/user/user-details");
};
