import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import { login } from "../actions/auth";
import "./demo.css";
const schema = yup.object().shape({
  taiKhoan: yup.string().required("Tài khoản không được để trống"),
  matKhau: yup
    .string()
    .required("Mật khẩu không được để trống")
    .min(8, "Mật khẩu phải từ 8 kí tự"),
});

export default function Login() {
  const dispatch = useDispatch();
  const { currentUser, isLoading, error } = useSelector((state) => state.auth);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { taiKhoan: "", matKhau: "" },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    dispatch(login(values));
  };

  if (currentUser) {
    // currentUser !== null => đã đăng nhập => redirect về trang home
    return <Redirect to="/" />;
  }

  return (
    <div class="login__page">
      <img src="../img/logoTix.png" alt="" style={{ width: "300px" }} />

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Tài khoản */}
        <div>
          <Controller
            name="taiKhoan"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Tài Khoản"
                error={!!errors.taiKhoan}
                helperText={errors.taiKhoan?.message}
              />
            )}
          />
        </div>

        {/* Mật khẩu */}
        <div>
          <Controller
            name="matKhau"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type="password"
                label="Mật khẩu"
                error={!!errors.matKhau}
                helperText={errors.matKhau?.message}
                color="white"
              />
            )}
          />
        </div>
        <div className="login__a__button mt-5">
          <a class="login__a" href="/register">
            {" "}
            Đăng ký
          </a>
          <button className="login__button ml-5">Đăng nhập</button>
        </div>
      </form>
    </div>
  );
}
