import {
  GET_MOVIE_DETAILS_FAILURE,
  GET_MOVIE_DETAILS_REQUEST,
  GET_MOVIE_DETAILS_SUCCESS,
} from "../constants/movieDetails";

const initialState = {
  data: {},
  isLoading: false,
  error: null,
};

const movieDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_MOVIE_DETAILS_SUCCESS: {
      return { ...state, isLoading: false, data: action.payload.data };
    }
    case GET_MOVIE_DETAILS_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
};

export default movieDetailsReducer;
