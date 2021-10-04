import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../../../services/movieAPI";

const initialState = {
  cinemas: [],
  isLoading: false,
  error: null,
};

// Tạo action thông qua createAsyncThunk
export const getCinema = createAsyncThunk("cinema/getCinema", async () => {
  const data = await movieAPI.getCinema();
  return { data };
});

const cinemaSlice = createSlice({
  name: "cinema",
  initialState,
  extraReducers: {
    [getCinema.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCinema.fulfilled]: (state, action) => {
      state.cinemas = action.payload.data;
      state.isLoading = false;
    },
    [getCinema.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

// export const { getMovieRequest, getMovieSuccess, getMovieFailure } =
//   movieSlice.actions;

export default cinemaSlice.reducer;
