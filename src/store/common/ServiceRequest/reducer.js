import {
  SERVICE_REQUEST_RECEIVED_LOADING,
  SERVICE_REQUEST_RECEIVED_SUCCESS,
  SERVICE_REQUEST_RECEIVED_ERROR,
} from "./constants";

const initialState = {
  createServiceRequest: {
    loading: false,
    data: null,
    error: null,
  },
};

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SERVICE_REQUEST_RECEIVED_LOADING:
      return {
        ...state,
        createServiceRequest: {
          loading: true,
          data: null,
          error: null,
        },
      };

    case SERVICE_REQUEST_RECEIVED_SUCCESS:
      return {
        ...state,
        createServiceRequest: {
          loading: false,
          data: action.data,
          error: null,
        },
      };

    case SERVICE_REQUEST_RECEIVED_ERROR:
      return {
        ...state,
        createServiceRequest: {
          loading: false,
          data: null,
          error: action.error,
        },
      };

    default:
      return state;
  }
};

export default serviceReducer;
