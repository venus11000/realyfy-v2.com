import { getUserDetails } from "../../../api";
import { LOCAL_STORAGE_KEYS } from "../../../utils/constants/site-settings";
import {
  LOGOUT_SUCCESS,
  SET_USER_DETAILS_ERROR,
  SET_USER_DETAILS_LOADING,
  SET_USER_DETAILS_SUCCESS,
} from "./constants";

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
