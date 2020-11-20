import {  CREATE,LOGIN} from '../constants/actionType';


const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  user: null
};



export default (acc = initialState, action) => {
  switch (action.type) {
    // case FETCH_ALL:
    //   return action.payload;
    // case LIKE:
    //   return acc.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      return {
        ...acc,
        ...action.payload,
        isAuthenticated: false,
      };


    case LOGIN:
      return {
        ...acc,
        ...action.payload,
        isAuthenticated: true,
      };;



    // case UPDATE:
    //   return acc.map((post) => (post._id === action.payload._id ? action.payload : post));
    // case DELETE:
    //   return acc.filter((post) => post._id !== action.payload);
    default:
      return acc;
  }
};