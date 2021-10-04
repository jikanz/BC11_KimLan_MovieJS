import React from "react";
import "../styles/css/Footer.css";
export default function Footer() {
  return (
    <div className="col-xs-12" id="footer">
      <div className="maxWidth">
        <div className="row">
          <div className="col-sm-4 col-xs-12">
            <p>TIX</p>
            <div
              className="col-sm-6 col-xs-6"
              style={{
                display: "inline-flex",
                flexDirection: "column",
                fontSize: "13px",
              }}
            >
              <a href="">FAQ</a>
              <a href="">Brand Guidelines</a>
            </div>
            <div
              className="col-sm-6 col-xs-6"
              style={{
                display: "inline-flex",
                flexDirection: "column",
                fontSize: "13px",
              }}
            >
              <a href="">Thỏa thuận sử dụng</a>
              <a href="">Chính sách bảo mật</a>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12">
            <p>ĐỐI TÁC</p>
            <div style={{ marginBottom: "15px" }}>
              <div class="row col-sm-12 col-xs-12 linePartner d-inline">
                <a href="">
                  <img className="iconFooter" src="/img/123go.png" alt="" />
                </a>
                <a href="">
                  <img
                    className="iconFooter"
                    src="/img/404b8c4b80d77732e7426cdb7e24be20.png"
                    alt=""
                  />
                </a>
                <a href="">
                  <img className="iconFooter" src="/img/AGRIBANK.png" alt="" />
                </a>
                <a href="">
                  <img className="iconFooter" src="/img/bhd.png" alt="" />
                </a>
                <a href="">
                  <img className="iconFooter" src="/img/bt.jpg" alt="" />
                </a>
              </div>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <div className="row col-sm-12 col-xs-12 linePartner d-inline">
                <a href="">
                  <img className="iconFooter" src="/img/cgv.png" alt="" />
                </a>
                <a href="">
                  <img className="iconFooter" src="/img/cinestar.png" alt="" />
                </a>
                <a href="">
                  <img className="iconFooter" src="/img/cnx.jpg" alt="" />
                </a>
                <a href="">
                  <img className="iconFooter" src="/img/dcine.png" alt="" />
                </a>
                <a href="">
                  <img
                    className="iconFooter"
                    src="/img/dongdacinema.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <div className="row col-sm-12 col-xs-12 linePartner d-inline">
                <a href="">
                  <img
                    className="iconFooter"
                    src="/img/galaxycine.png"
                    alt=""
                  />
                </a>
                <a href="">
                  <img className="iconFooter" src="/img/IVB.png" alt="" />
                </a>
                <a href="">
                  <img className="iconFooter" src="/img/laban.png" alt="" />
                </a>
                <a href="">
                  <img className="iconFooter" src="/img/megags.png" alt="" />
                </a>
                <a href="">
                  <img className="iconFooter" src="/img/payoo.jpg" alt="" />
                </a>
              </div>
            </div>
            <div className="row col-sm-12 col-xs-12 linePartner d-inline">
              <a href="">
                <img className="iconFooter" src="/img/STARLIGHT.png" alt="" />
              </a>
              <a href="">
                <img className="iconFooter" src="/img/TOUCH.png" alt="" />
              </a>
              <a href="">
                <img className="iconFooter" src="/img/VCB.png" alt="" />
              </a>
              <a href="">
                <img className="iconFooter" src="/img/VIETTINBANK.png" alt="" />
              </a>
              <a href="">
                <img
                  className="iconFooter"
                  src="/img/zalopay_icon.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12 App">
            <div className="col-xs-6 hideOnMobile textCenter">
              <p className="title">MOBILE APP</p>
              <a
                target="_blank"
                href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
                title="Apple App"
              >
                <img src="/img/apple-logo.png" alt="" className="iconApp" />
              </a>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                title="Android App"
              >
                <img src="img/android-logo.png" alt="" className="iconApp" />
              </a>
            </div>
            <div className="col-xs-6 textCenter">
              <p className="title hideOnMobile">SOCIAL</p>
              <a
                target="_blank"
                href="https://www.facebook.com/tix.vn/"
                title="Facebook social"
              >
                <img src="img/facebook-logo.png" alt="" className="iconApp" />
              </a>
              <a
                target="_blank"
                href="https://zalo.me/tixdatve"
                title="Zalo social"
              >
                <img src="img/zalo-logo.png" alt="" className="iconApp" />
              </a>
            </div>
          </div>
        </div>
        <hr className="hr" />
        <div class="row">
          <div class="col-sm-1 col-xs-12 imgFooter">
            <img src="img/zion-logo.jpg" alt="" style={{ width: "70px" }} />
          </div>
          <div class="col-sm-9 col-xs-12 infoFooter">
            <span>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</span>
            <span>
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam.
            </span>
            <span>
              Giấy chứng nhận đăng ký kinh doanh số: 0101659783, đăng ký thay
              đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư
              Thành phố Hồ Chí Minh cấp.
            </span>
            <span>
              Số Điện Thoại (Hotline): 1900 545 436 Email:{" "}
              <a href="mailto:support@tix.vn">support@tix.vn</a>
            </span>
          </div>
          <div class="col-sm-2 col-xs-12 imgFooter">
            <a
              target="_blank"
              href="http://online.gov.vn/Home/WebDetails/62782"
            >
              <img src="img/stick.png" alt="" style={{ width: "120px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
