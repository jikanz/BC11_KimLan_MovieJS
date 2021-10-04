import movieAPI from "../../../services/movieAPI";

export const getMovies = () => {
  return async (dispatch) => {
    // Gọi API lấy danh sách phim
  };
}

export const addMovie = (movie) => {
  return async (dispatch) => {
    await movieAPI.addMovie(movie);
    // Sau khi thêm phim thành công ta gọi lại action getMovies để lấy đc danh sách phim mới nhất
    getMovies()
  };
};
