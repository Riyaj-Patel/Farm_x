import { GET_ERRORS, CLEAR_ERRORS, GET_SUCCESS } from '../constants/actionType';

export const returnErrors = (msg, status) => {
    return {
      type: GET_ERRORS,
      payload: {msg, status}
    };
  };
  export const returnSuccess = (msg, status) => {
    return {
      type: GET_SUCCESS,
      payload: {msg, status}
    };
  };

  // CLEAR ERRORS
  export const clearErrors = () => {
    return {
      type: CLEAR_ERRORS
    };
  };
  