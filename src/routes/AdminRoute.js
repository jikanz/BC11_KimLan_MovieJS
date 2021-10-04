import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AdminRoute({ children, ...rest }) {
  // define những logic mình muốn ở đây
  // Lấy thông tin user và kiểm tra xem có quyền truy cập vào admin hay không
  const { currentUser } = useSelector((state) => state.auth);

  if (!currentUser || currentUser.maLoaiNguoiDung === "KhachHang") {
    // Không có quyền truy cập

    // return 1 component nào đó thông báo không được phép truy cập
    // return <PageForbidden />

    // return về component Redirect dễ chuyển hướng người dùng về 1 trang hợp lệ
    return <Redirect to="/" />;
  }

  return <Route {...rest}>{children}</Route>;
}
