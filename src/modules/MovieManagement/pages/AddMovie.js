import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button } from "@material-ui/core";
import { addMovie } from "../actions/movieManagement";

/**
 * Data cần để thêm phim
 * tenPhim, biDanh, trailer, hinhAnh, moTa, ngayKhoiChieu, maNhom
 */

export default function AddMovie() {
  const dispatch = useDispatch();
  const { control, register, handleSubmit, watch } = useForm();

  const [imgPreview, setImgPreview] = useState("");
  const watchImg = watch("hinhAnh", []);

  const fileRef = useRef(null);

  useEffect(() => {
    // Từ 1 file ta có thể decode thành 1 string dạng base64 để có thể nhúng vào src của tag img
    const file = watchImg[0];

    if (!file) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = (evt) => {
      console.log(evt.target.result);
      setImgPreview(evt.target.result);
    };
  }, [watchImg]);

  const onSubmit = (values) => {
    console.log(values);
    dispatch(addMovie(values));
  };

  return (
    <div>
      <h1>Admin Add Movie</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name="tenPhim"
            control={control}
            render={({ field }) => <TextField {...field} label="Tên Phim" />}
          />
        </div>

        <div>
          <Controller
            name="biDanh"
            control={control}
            render={({ field }) => <TextField {...field} label="Bí Danh" />}
          />
        </div>

        <div>
          <Controller
            name="trailer"
            control={control}
            render={({ field }) => <TextField {...field} label="Trailer" />}
          />
        </div>

        <div>
          {/* Đối với 1 số thư viện khi submit input có type là file nó chỉ trả và đường dẫn của file tuy nhiên cái ta cần lấy là file để up lên hệ thống, lúc đó ta cần tự viết hàm onChange và lấy file bằng cách event.target.files */}
          <input
            type="file"
            id="hinhAnh"
            // ref={fileRef}
            {...register("hinhAnh")}
            // style={{ display: "none" }}
          />

          {/* Sử dụng ref để có thể tương tác giữa các element với nhau */}
          {/* <Button variant="contained" color="primary" onClick={() => fileRef.current.click()}>
            Upload file
          </Button> */}
          {imgPreview && <img src={imgPreview} alt="preview" />}
        </div>

        <div>
          <Controller
            name="moTa"
            control={control}
            render={({ field }) => <TextField {...field} label="Mô tả" />}
          />
        </div>

        <div>
          <Controller
            name="ngayKhoiChieu"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Ngày Khởi Chiếu" />
            )}
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}
