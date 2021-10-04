import React, { useState } from "react";
import "../../../styles/css/MovieShowing.css";
import MovieItem from "../Movieshowing/movieItem2";
// Sử dụng createSelector để ghi nhớ lại giá trị hiện tại của selector, khi redux store thay đổi nó sẽ so sánh giá trị hiện tại của selector với giá trị mới của redux store, nếu không có sự khác biệt nó sẽ không cần phải tính toán lại
// Lưu ý: tuy nhiên ta chỉ nên sử dụng createSelector khi ta select state từ redux store và có những tính toán phức tạp trước khi return về data

export default function MovieShowing() {
  // Khi ta để logic gọi API trực tiếp trong component sẽ có 2 vấn đề
  // - Component sẽ chứa cả logic lần UI => file sẽ khá dài
  // - Không có khả năng tái sử dụng..
  const [active, setActive] = useState(true);
  const handle = () => {
    setActive(!active);
  };
  let buttonShowing = document.querySelectorAll(".buttonShowing");
  for (let i = 0; i < buttonShowing.length; i++) {
    buttonShowing[i].onclick = function () {
      let j = 0;
      while (j < buttonShowing.length) {
        buttonShowing[j++].className = "buttonShowing";
      }
      buttonShowing[i].className = "buttonShowing active";
    };
  }
  return (
    <div style={{ paddingTop: "80px" }} id="lichchieu">
      <div className="container w-100">
        <div className="buttonShowmovie " style={{ textAlign: "center" }}>
          <button
            className="buttonShowing active"
            style={{ marginRight: "100px" }}
            onClick={handle}
            disabled={active}
          >
            <h2>Đang Chiếu</h2>
          </button>
          <button className="buttonShowing" onClick={handle} disabled={!active}>
            <h2>Sắp Chiếu</h2>
          </button>
        </div>
        <MovieItem active={active} />
      </div>
    </div>
  );
}
