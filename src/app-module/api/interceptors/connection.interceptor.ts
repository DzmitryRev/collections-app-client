import { api } from "../../../shared/api";
import { dispatch } from "../../../store";
import { setConnectionError } from "../../store/slices/connectionErrorSlice/connectionErrorSlice";

api.interceptors.request.use(
  (config) => {
    return config;
  },
  async (error) => {
    if (!error?.response) {
      dispatch(setConnectionError(true));
    }
    throw error;
  }
);

api.interceptors.response.use(
  (config) => {
    dispatch(setConnectionError(false));
    return config;
  },
  async (error) => {
    console.log(error);
    if (!error?.response) {
      dispatch(setConnectionError(true));
    } else {
      dispatch(setConnectionError(false));
    }
    throw error;
  }
);
