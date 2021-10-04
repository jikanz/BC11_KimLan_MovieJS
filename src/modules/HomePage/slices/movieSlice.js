import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../../../services/movieAPI";

const initialState = {
  movies: [],
  isLoading: false,
  error: null,
};

// Tạo action thông qua createAsyncThunk
export const getMovies = createAsyncThunk(
  "movieShowing/getMovies",
  async () => {
    const data = await movieAPI.getShowing();
    return { data };
  }
);

const movieSlice = createSlice({
  name: "movieShowing",
  initialState,
  // reducers: {
    // getMovieRequest(state, action) {
    //   state.isLoading = true;
    // },
    // getMovieSuccess(state, action) {
    //   state.movies = action.payload.data;
    //   state.isLoading = false;
    // },
    // getMovieFailure(state, action) {
    //   state.error = action.payload.error;
    //   state.isLoading = false;
    // },
  // },
  extraReducers: {
    [getMovies.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getMovies.fulfilled]: (state, action) => {
      state.movies = action.payload.data;
      state.isLoading = false;
    },
    [getMovies.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

// export const { getMovieRequest, getMovieSuccess, getMovieFailure } =
//   movieSlice.actions;

export default movieSlice.reducer;

// Đây là cách sử dụng action thunk thông thường
// export const getMovies = () => {
//   return async (dispatch) => {
//     dispatch(getMovieRequest());
//     // Gọi API
//     try {
//       const data = await movieAPI.getShowing();
//       console.log(data);

//       // Thành công set data từ API cho movies và set loading lại thành false
//       dispatch(getMovieSuccess({ data }));
//     } catch (error) {
//       // Thất bại set error và loading thành false
//       dispatch(getMovieFailure({ error }));
//     }
//   };
// };
