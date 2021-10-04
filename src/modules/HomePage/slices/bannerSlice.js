import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../../../services/movieAPI";

const initialState = {
  banners: [],
  isLoading: false,
  error: null,
};

// Tạo action thông qua createAsyncThunk
export const getBanner = createAsyncThunk("banner/getBanner", async () => {
  const data = await movieAPI.getBanner();
  return { data };
});

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  extraReducers: {
    [getBanner.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getBanner.fulfilled]: (state, action) => {
      state.banners = action.payload.data;
      state.isLoading = false;
    },
    [getBanner.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

// export const { getMovieRequest, getMovieSuccess, getMovieFailure } =
//   movieSlice.actions;

export default bannerSlice.reducer;
