import React, { useEffect } from "react";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { getCinemas } from "../slices/diaChiSlice";
const movieSelector = createSelector(
  (state) => state,
  (state) => state.cinemas
);
export default function ItemDiaChi(props) {
  const { param } = props;
  const dispatch = useDispatch();
  const { cinemas, isLoading, error } = useSelector(movieSelector);
  useEffect(() => {
    dispatch(getCinemas(param));
  }, [param]);
  return (
    <div>
      {cinemas.map((movie, index) => (
        <div key={index} className="cinema__diaChi">
          <span style={{ color: "green" }}>{movie.tenCumRap}</span>{" "}
          <p>{movie.diaChi}</p>
        </div>
      ))}
    </div>
  );
}
