import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../../../services/movieAPI";

const initialState = {
  cinemas: [],
  isLoading: false,
  error: null,
};

// Tạo action thông qua createAsyncThunk
export const getCinemas = createAsyncThunk(
  "cinema/getCinemas",
  async (movieId) => {
    const data = await movieAPI.getCinemas(movieId);
    return { data };
  }
);

const cinemasSlice = createSlice({
  name: "cinemaDiaChi",
  initialState,
  extraReducers: {
    [getCinemas.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCinemas.fulfilled]: (state, action) => {
      state.cinemas = action.payload.data;
      state.isLoading = false;
    },
    [getCinemas.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

// export const { getMovieRequest, getMovieSuccess, getMovieFailure } =
//   movieSlice.actions;

export default cinemasSlice.reducer;
