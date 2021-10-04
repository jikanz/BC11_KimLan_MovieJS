import React, { useState } from "react";
import "../../../styles/css/news.css";
import Newx from "../News";
export default function News() {
  const [active, setActive] = useState("a");
  const handle = () => {
    setActive("a");
  };
  const handle2 = () => {
    setActive("b");
  };
  const handle3 = () => {
    setActive("c");
  };
  console.log(active);
  let buttonShowing2 = document.querySelectorAll(".buttonShowing2");
  for (let i = 0; i < buttonShowing2.length; i++) {
    buttonShowing2[i].onclick = function () {
      let j = 0;
      while (j < buttonShowing2.length) {
        buttonShowing2[j++].className = "buttonShowing2";
      }
      buttonShowing2[i].className = "buttonShowing2 active";
    };
  }
  return (
    <div id="lichchieu">
      <div className="top__background">
        <img src="../img/back-news.png" alt="" />
      </div>
      <div className="container ">
        <div className="button__Show__News " style={{ textAlign: "center" }}>
          <button
            className="buttonShowing2 active"
            onClick={handle}
            disabled={active === "a"}
          >
            <h2>Điện Ảnh 24h</h2>
          </button>
          <button
            className="buttonShowing2"
            onClick={handle2}
            disabled={active === "b"}
          >
            <h2>Review</h2>
          </button>
          <button
            className="buttonShowing2"
            onClick={handle3}
            disabled={active === "c"}
          >
            <h2>Khuyến Mãi</h2>
          </button>
        </div>
        <Newx />
      </div>
    </div>
  );
}
