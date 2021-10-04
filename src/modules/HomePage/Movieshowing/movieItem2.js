import React, { useState, useEffect } from "react";
import "./demo.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../slices/movieSlice";
import { useHistory } from "react-router-dom";
const movieSelector = createSelector(
  (state) => state,
  (state) => state.movie
);
export default function MovieItem(props) {
  const { active } = props;
  const dispatch = useDispatch();
  const { movies, isLoading, error } = useSelector(movieSelector);
  const history = useHistory();
  useEffect(() => {
    dispatch(getMovies());
  }, []);
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
  };
  const goToDetails = (movieId) => {
    history.push(`/movie/${movieId}`);
  };

  return (
    <div className="wrapper">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <div className="content">
        <Slider {...settings}>
          {movies.map((item, index) => {
            return active && item.dangChieu === true ? (
              <div key={index} className="row item__phim">
                <div style={{ cursor: "pointer" }}>
                  <div
                    className="flim"
                    onClick={() => goToDetails(item.maPhim)}
                  >
                    <img src={item.hinhAnh} alt="" width="100%" height="100%" />
                  </div>
                  <div className="flimContent">
                    <span className="ageType">C18</span>
                    {item.tenPhim}
                  </div>
                  <div className="thoiLuong">
                    <p>100 phút</p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            );
          })}
        </Slider>
      </div>
      <div className="content">
        <Slider {...settings}>
          {movies.map((item, index) => {
            return !active && item.sapChieu === true ? (
              <div key={index} className="row">
                <div style={{ cursor: "pointer" }}>
                  <div
                    className="flim"
                    onClick={() => goToDetails(item.maPhim)}
                  >
                    <img src={item.hinhAnh} alt="" width="100%" height="100%" />
                  </div>
                  <div className="flimContent">
                    <span>{item.tenPhim}</span>
                  </div>
                  <div>
                    <p>100 phút</p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
