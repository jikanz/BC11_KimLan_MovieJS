import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../actions/movieDetails";
import "./demo.css";
export default function MovieDetails() {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.movieDetails);

  useEffect(() => {
    // Dựa vào movieId lấy từ url xuống, ta sẽ dùng nó để gọi API lấy chi tiết phim
    dispatch(getMovieDetails(movieId));
  }, [movieId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="movie_details">
      <div className="movie_details_background">
        <div className="movie_details_background_img">
          <img src={data.hinhAnh} alt="" width="100%" height="800px" />
        </div>
        <div class="styleGradient"></div>
      </div>
      <div className="movie_details_content">
        <div className="movie_details_content_container">
          <div className="row">
            <div className="col-4">
              <img src={data.hinhAnh} alt="" width="100%" height="350px" />
            </div>
            <div className="col-7">
              <div class="movie_details_info">
                <h5>{data.ngayKhoiChieu}</h5>
                <p>{data.tenPhim}</p>
                <span>Được Đánh Giá : {data.danhGia} /10</span>
                <br />
                <button>Mua Vé</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
