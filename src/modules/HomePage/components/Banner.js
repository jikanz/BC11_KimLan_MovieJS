import React, { useEffect } from "react";
import "../../../styles/css/banner.css";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { getBanner } from "../slices/bannerSlice";
import { useHistory } from "react-router";

// Sử dụng createSelector để ghi nhớ lại giá trị hiện tại của selector, khi redux store thay đổi nó sẽ so sánh giá trị hiện tại của selector với giá trị mới của redux store, nếu không có sự khác biệt nó sẽ không cần phải tính toán lại
// Lưu ý: tuy nhiên ta chỉ nên sử dụng createSelector khi ta select state từ redux store và có những tính toán phức tạp trước khi return về data
const bannerSelector = createSelector(
  (state) => state,
  (state) => state.banner
);
function onChange() {}

export default function Banner() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { banners, isLoading, error } = useSelector(bannerSelector);
  useEffect(() => {
    dispatch(getBanner());
  }, []);
  const goToDetails = (movieId) => {
    history.push(`/movie/${movieId}`);
  };

  return (
    <div id="banner">
      <Carousel autoplay afterChange={onChange}>
        {banners.map((movie) => (
          <div style={{ display: "flex" }} key={movie.maBanner}>
            <a href="" onClick={() => goToDetails(movie.maPhim)}>
              <img
                src={movie.hinhAnh}
                alt=""
                style={{
                  height: "666px",
                  width: "1903px",
                }}
              />
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
