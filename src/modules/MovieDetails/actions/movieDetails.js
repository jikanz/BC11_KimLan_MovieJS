import movieAPI from "../../../services/movieAPI";
import {
  GET_MOVIE_DETAILS_FAILURE,
  GET_MOVIE_DETAILS_REQUEST,
  GET_MOVIE_DETAILS_SUCCESS,
} from "../constants/movieDetails";

export const getMovieDetails = (movieId) => {
  return async (dispatch, getState) => {
    // B1: Gọi action Request
    dispatch({ type: GET_MOVIE_DETAILS_REQUEST });

    // B2: Gọi API
    try {
      const data = await movieAPI.getDetails(movieId);

      // B3: Nếu thành công, gọi action Success
      dispatch({
        type: GET_MOVIE_DETAILS_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      // B3: Nếu thành công, gọi action Failure
      dispatch({
        type: GET_MOVIE_DETAILS_FAILURE,
        payload: { error },
      });
    }
  };
};
