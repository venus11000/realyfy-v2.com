import { login, getUserDetails } from "../../../api";
import { LOCAL_STORAGE_KEYS } from "../../../utils/constants/site-settings";
import {
  SET_LOGIN_LOADING,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR,
  LOGOUT_SUCCESS,
  SET_USER_DETAILS_ERROR,
  SET_USER_DETAILS_LOADING,
  SET_USER_DETAILS_SUCCESS,
} from "./constants";

export const loginAction = (data) => {
  return async (dispatch) => {
    dispatch(setLoginLoading());
    try {
      const response = await login(data);

      if (response?.status === 200 && response?.data?.token) {
        // dispatch(setLoginSuccss(response?.data?.user));
        await localStorage.setItem(
          LOCAL_STORAGE_KEYS.AUTH_TOKEN,
          response?.data?.token
        );
        dispatch(getUserDetailsAction());
      } else {
        dispatch(setLoginError(response?.data));
      }
    } catch (error) {
      console.log("LOGIN ERROR", error.response.data);
      dispatch(setLoginError(error.response.data));
    }
  };
};

export const setLoginLoading = () => {
  return {
    type: SET_LOGIN_LOADING,
  };
};

export const setLoginSuccss = (data) => {
  return {
    type: SET_LOGIN_SUCCESS,
    data,
  };
};

export const setLoginError = (error) => {
  return {
    type: SET_LOGIN_ERROR,
    error,
  };
};

export const getUserDetailsAction = () => {
  return async (dispatch) => {
    dispatch(setUserDetailsLoading());
    try {
      const response = await getUserDetails();

      if (response?.status === 200 && response?.data?.user) {
        dispatch(setUserDetailsSuccss(response?.data?.user));
      } else {
        dispatch(setUserDetailsError(response?.data));
      }
    } catch (error) {
      console.log("GET USER DETAILS ERROR", error);
      dispatch(setUserDetailsError(error));
    }
  };
};

export const setUserDetailsLoading = () => {
  return {
    type: SET_USER_DETAILS_LOADING,
  };
};

export const setUserDetailsSuccss = (data) => {
  return {
    type: SET_USER_DETAILS_SUCCESS,
    data,
  };
};

export const setUserDetailsError = (error) => {
  return {
    type: SET_USER_DETAILS_ERROR,
    error,
  };
};

export const handleLogout = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
  return {
    type: LOGOUT_SUCCESS,
  };
};
