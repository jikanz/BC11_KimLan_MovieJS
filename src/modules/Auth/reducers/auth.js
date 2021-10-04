import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
} from "../constants/auth";

const currentUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  isLoading: false,
  error: null,
  currentUser,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case LOGIN_FAILURE:
    case REGISTER_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        currentUser: action.payload.data,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
