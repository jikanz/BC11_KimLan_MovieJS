import React from "react";

export default function Newx() {
  return (
    <div className="container">
      <div className="row newx__row mb-4">
        <div className="col-6">
          <img
            src="../img/an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat-fast-furious-mien-song-nuoc-16170881088272.png"
            alt=""
            width="100%"
          />
          <a href="">
            <p className="newsTitle ">
              Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt:
              48H đậm chất{" "}
            </p>
          </a>
          <p></p>
          <div className="news__icon">
            Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi
            gay cấn thót tim fans hâm mộ
          </div>
        </div>
        <div className="col-6">
          <img
            src="../img/mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam-16170160290762.png"
            alt=""
            width="100%"
          />
          <a href="">
            <p className="newsTitle ">
              [MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - GỌI TÊN NHỮNG PHIM ĐIỆN ẢNH
              NỔI TIẾNG ĐƯỢC CHUYỂN THỂ TỪ CÁC TỰA GAME ĐÌNH ĐÁM
            </p>
          </a>
          <p></p>
          <div className="news__icon">
            Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ, Hollywood cũng
            không thiếu những tác phẩm đình đám được chuyển thể từ tiểu thuyết,
            phim hoạt hình, hay thậm chí là cả trò chơi điện tử.
          </div>
        </div>
      </div>
      <div className="row newx__row">
        <div className="col-4">
          {" "}
          <img
            src="../img/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png"
            alt=""
            width="100%"
          />
          <a href="">
            <p className="newsTitle ">
              PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn
              trả thù đàn ông để đời
            </p>
          </a>
          <p>
            Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng mục nữ
            chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự nghiệp của cô
            trong phim Promising Young Woman (tựa Việt: Cô Gái Trẻ Hứa Hẹn).
          </p>
          <div className="news__icon"></div>
        </div>
        <div className="col-4">
          {" "}
          <img
            src="../img/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png"
            alt=""
            width="100%"
          />
          <a href="">
            <p className="newsTitle ">
              VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT QUỶ”
              ĐẢM BẢO ĐỐN TIM HỘI CHỊ EM
            </p>
          </a>
          <p>
            Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về năng lực
            diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo Sik, tác phẩm
            kinh dị – hành
          </p>
          <div className="news__icon"></div>
        </div>
        <div className="col-4">
          <div className="news__child">
            <div className="news__img">
              <img src="../img/nho1.jpg " alt="" width="50px" height="50px" />
            </div>
            <p className="newsTitle " style={{ fontSize: "14px" }}>
              Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
            </p>
          </div>
          <div className="news__child">
            <div className="news__img">
              <img src="../img/nho2.png" alt="" width="50px" height="50px" />
            </div>
            <p className="newsTitle " style={{ fontSize: "14px" }}>
              “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
            </p>
          </div>
          <div className="news__child">
            <div className="news__img">
              <img src="../img/nho3.png" alt="" width="50px" height="50px" />
            </div>
            <p className="newsTitle " style={{ fontSize: "14px" }}>
              Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu
            </p>
          </div>
          <div className="news__child">
            <div className="news__img">
              <img src="../img/nho4.jpg" alt="" width="50px" height="50px" />
            </div>
            <p className="newsTitle " style={{ fontSize: "14px" }}>
              NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG PHỤC
              CHO SIÊU ANH HÙNG.
            </p>
          </div>
        </div>
      </div>
      <div className="news__button">
        <button> Xem Thêm</button>
      </div>
    </div>
  );
}
