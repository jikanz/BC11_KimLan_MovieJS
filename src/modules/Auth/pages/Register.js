import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import { register } from "../actions/auth";
import "./demo.css";
const schema = yup.object().shape({
  taiKhoan: yup.string().required("Tài khoản không được để trống"),
  matKhau: yup
    .string()
    .required("Mật khẩu không được để trống")
    .min(8, "Mật khẩu phải từ 8 kí tự"),
  email: yup
    .string()
    .required("Email không được để trống")
    .email("Email không hợp lệ"),
  hoTen: yup.string().required("Họ tên không được để trống"),
  soDt: yup.string().required("Số điện thoại không được để trống"),
});

export default function Register() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);
  const history = useHistory();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      soDt: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    console.log(values);
    dispatch(register(values, handleRegisterSuccess));
  };

  const handleRegisterSuccess = () => {
    // Điều hướng qua trang login
    history.push("/login");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Tài khoản */}
        <img src="../img/logoTix.png" alt="" style={{ width: "300px" }} />
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
              />
            )}
          />
        </div>

        <div>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />
        </div>

        <div>
          <Controller
            name="hoTen"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Họ Tên"
                error={!!errors.hoTen}
                helperText={errors.hoTen?.message}
              />
            )}
          />
        </div>

        <div>
          <Controller
            name="soDt"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Số điện thoại"
                error={!!errors.soDt}
                helperText={errors.soDt?.message}
              />
            )}
          />
        </div>

        {error && <p>{error}</p>}

        <button className="login__button ml-5" disabled={isLoading}>
          Đăng Ký
        </button>
      </form>
    </div>
  );
}

// export default function DemoRef() {
//   const [value, setValue] = useState("");

//   const inputRef = useRef();

// Tạo 1 biến ref để lưu trữ dữ liệu
// Khi ta thay đổi giá trị của ref, component không bị render lại
// const value = useRef("hello");
// value.current = "Cybersoft";

//   const handleSubmit = () => {
//     // controlled
//     console.log('controlled', value)

//     // Uncontrolled
//     console.log('Uncontrolled', inputRef.current.value)
//   };

//   console.log('re-render')

//   return (
//     <div>
//       <h1>Register Page</h1>

//       {/* Controlled */}
//       <input value={value} onChange={(evt) => setValue(evt.target.value)} />

//       {/* Uncontrolled */}
//       <input ref={inputRef} />

//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// }
