import axios from "axios";
import { dispatch } from "../../../store/";
import { setIsError } from "../store/connectionErrorSlice";

// this extension use to catch global errors (server or db errors)

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  async (error) => {
    if (!error?.response) {
      dispatch(setIsError(true));
    }
    throw error;
  }
);

axios.interceptors.response.use(
  (config) => {
    dispatch(setIsError(false));
    return config;
  },
  async (error) => {
    console.log(error);
    if (!error?.response) {
      dispatch(setIsError(true));
    } else {
      dispatch(setIsError(false));
    }
    throw error;
  }
);
