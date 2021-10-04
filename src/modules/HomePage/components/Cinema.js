import React, { useState } from "react";
import ItemDiaChi from "../RapChieuPhim/itemDiaChi";
import ItemRapChieuPhim from "../RapChieuPhim/itemLogo";
import "../../../styles/css/cinema.css";
export default function Cinema() {
  function renderLogo(logo) {
    let duLieu = "";
    switch (logo.maHeThongRap) {
      case "BHDStar":
        {
          duLieu = "BHDStar";
        }
        break;
      case "CGV":
        {
          duLieu = "CGV";
        }
        break;
      case "CineStar":
        {
          duLieu = "CineStar";
        }
        break;
      case "Galaxy":
        {
          duLieu = "Galaxy";
        }
        break;
      case "LotteCinima":
        {
          duLieu = "LotteCinima";
        }
        break;
      case "MegaGS":
        {
          duLieu = "MegaGS";
        }
        break;
    }
    console.log(logo.maHeThongRap);
    setA(duLieu);
  }
  const [a, setA] = useState("BHDStar");
  return (
    <div className="homeCinemaComplex">
      <div className="top__background">
        <img src="../img/back-news.png" alt="" />
      </div>
      <div className="cumRap">
        <div className="img"></div>
        <div className="container">
          <div className="row m-auto " style={{ maxWidth: "940px" }}>
            <div className="col-1 border__logo">
              <ItemRapChieuPhim data={renderLogo} />
            </div>

            <div className="col-4 border__diaChi">
              <ItemDiaChi param={a} />
            </div>
            <div
              className="col-7 border__suatChieu"
              style={{ textAlign: "center" }}
            >
              <div className="cinema__suatChieu">
                <h4>Không có suất chiếu</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
