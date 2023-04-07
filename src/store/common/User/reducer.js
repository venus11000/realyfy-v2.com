import {
  SET_LOGIN_LOADING,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR,
  SET_USER_DETAILS_LOADING,
  SET_USER_DETAILS_SUCCESS,
  SET_USER_DETAILS_ERROR,
  LOGOUT_SUCCESS,
} from "./constants";

const initialState = {
  signin: {
    loading: false,
    data: null,
    error: null,
  },
  user: {
    loading: false,
    data: null,
    error: null,
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_LOADING:
      return {
        ...state,
        signin: {
          loading: true,
          data: null,
          error: null,
        },
      };

    case SET_LOGIN_SUCCESS:
      return {
        ...state,
        signin: {
          loading: false,
          data: action.data,
          error: null,
        },
      };

    case SET_LOGIN_ERROR:
      return {
        ...state,
        signin: {
          loading: false,
          data: null,
          error: action.error,
        },
      };

    case SET_USER_DETAILS_LOADING:
      return {
        ...state,
        user: {
          loading: true,
          data: null,
          error: null,
        },
      };

    case SET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        user: {
          loading: false,
          data: action.data,
          error: null,
        },
      };

    case SET_USER_DETAILS_ERROR:
      return {
        ...state,
        user: {
          loading: false,
          data: null,
          error: action.error,
        },
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: {
          loading: false,
          data: null,
          error: null,
        },
      };

    default:
      return state;
  }
};

export default userReducer;
