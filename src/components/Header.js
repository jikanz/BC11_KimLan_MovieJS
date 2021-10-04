import React from "react";
import { useSelector } from "react-redux";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "../styles/components/headerStyle";
export default function Header() {
  const { currentUser, isLoading, error } = useSelector((state) => state.auth);
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src="/web-logo.png" alt="" width="50px" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/a">Lịch Chiếu</NavLink>
          <NavLink to="/b">Cụm Rạp</NavLink>
          <NavLink to="/c">Tin tức</NavLink>
          <NavLink to="/d">Ứng Dụng</NavLink>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {currentUser ? (
          <div
            className="header__dangNhap d-flex"
            style={{ alignItems: "flex-end" }}
          >
            <p> {currentUser?.hoTen} </p>
            <button onClick={!isLoading} style={{ margin: "10px" }}>
              Đăng Xuất
            </button>
          </div>
        ) : (
          <NavBtn>
            <NavBtnLink to="/login">Đăng nhập</NavBtnLink>
            <NavBtnLink to="/Register">Đăng ký</NavBtnLink>
          </NavBtn>
        )}
      </Nav>
    </>
  );
}
