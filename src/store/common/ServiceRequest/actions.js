import { createServiceRequest } from "../../../api";
import {
  SERVICE_REQUEST_RECEIVED_LOADING,
  SERVICE_REQUEST_RECEIVED_SUCCESS,
  SERVICE_REQUEST_RECEIVED_ERROR,
} from "./constants";

export const createServiceRequestAction = (data) => {
  return async (dispatch) => {
    dispatch(createServiceRequestLoading());
    try {
      const response = await createServiceRequest(data);

      if (response?.status === 200) {
        dispatch(createServiceRequestSuccss(response?.data));
      } else {
        dispatch(createServiceRequestError(response?.data));
      }
    } catch (error) {
      console.log("CREATE SERVICE REQUEST ERROR", error);
      dispatch(createServiceRequestError(error));
    }
  };
};

export const createServiceRequestLoading = () => {
  return {
    type: SERVICE_REQUEST_RECEIVED_LOADING,
  };
};

export const createServiceRequestSuccss = (data) => {
  return {
    type: SERVICE_REQUEST_RECEIVED_SUCCESS,
    data,
  };
};

export const createServiceRequestError = (error) => {
  return {
    type: SERVICE_REQUEST_RECEIVED_ERROR,
    error,
  };
};
