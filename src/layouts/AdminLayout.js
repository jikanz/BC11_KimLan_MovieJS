import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function AdminLayout({ children }) {
  const { pathname } = useLocation();

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* <Sidebar /> */}
      <div style={{ width: "25%", height: "100%" }}>
        <p>Cybersoft Movie</p>
        <p>
          <NavLink to="/admin/movie" activeClassName="active">
            Movie
          </NavLink>
        </p>
        <p>
          <Link
            to="/admin/user"
            className={`${pathname === "/admin/user" ? "active" : ""}`}
          >
            User
          </Link>
        </p>
      </div>

      <div style={{ width: "75%", height: "100%" }}>{children}</div>
    </div>
  );
}
