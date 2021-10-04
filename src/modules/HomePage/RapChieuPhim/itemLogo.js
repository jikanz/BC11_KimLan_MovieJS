import React, { useEffect } from "react";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { getCinema } from "../slices/cinemaSlice";
const movieSelector = createSelector(
  (state) => state,
  (state) => state.cinema
);
export default function ItemRapChieuPhim(props) {
  const { data } = props;
  const dispatch = useDispatch();
  const { cinemas, isLoading, error } = useSelector(movieSelector);
  useEffect(() => {
    dispatch(getCinema());
  }, []);
  let cinema__logo = document.querySelectorAll(".cinema__logo");
  for (let i = 0; i < cinema__logo.length; i++) {
    cinema__logo[i].onclick = function () {
      let j = 0;
      while (j < cinema__logo.length) {
        cinema__logo[j++].className = "cinema__logo";
      }
      cinema__logo[i].className = "cinema__logo active";
    };
  }
  return (
    <div>
      {cinemas.map((movie, index) => (
        <div key={index} className="cinema__logo">
          <button
            onClick={() => {
              data(movie);
            }}
          >
            <img src={movie.logo} alt="" alt="" width="50px" height="50px" />
          </button>
        </div>
      ))}
    </div>
  );
}
