// Tạo các hàm gọi API liên quan tới movie
import axiosClient from "./axiosClient";

const movieAPI = {
  getShowing: () => {
    return axiosClient.get(`QuanLyPhim/LayDanhSachPhim`, {
      params: { maNhom: "GP01" },
    });
  },
  getBanner: () => {
    return axiosClient.get(`QuanLyPhim/LayDanhSachBanner`);
  },
  getCinema: () => {
    return axiosClient.get(`QuanLyRap/LayThongTinHeThongRap`);
  },
  getDetails: (movieId) => {
    return axiosClient.get(`QuanLyRap/LayThongTinLichChieuPhim/`, {
      params: {
        maPhim: movieId,
      },
    });
  },
  getCinemas: (movieId) => {
    return axiosClient.get(`QuanLyRap/LayThongTinCumRapTheoHeThong`, {
      params: {
        maHeThongRap: movieId,
      },
    });
  },

  addMovie: (movie) => {
    // Thông thường khi gửi dữ liệu là object lên server, ta chỉ có thể lưu trữ được những kiểu dữ liệu cơ bản như string, number, boolean, array, object.
    // Tuy nhiên hinhAnh hiện tại là đối tượng File, ta cần phải sử dụng FormData để có thể lưu trữ được kiểu dữ liệu đặc biệt như File
    const formData = new FormData();
    formData.append("tenPhim", movie.tenPhim);
    formData.append("biDanh", movie.biDanh);
    formData.append("trailer", movie.trailer);
    formData.append("hinhAnh", movie.hinhAnh[0]);
    formData.append("moTa", movie.moTa);
    formData.append("ngayKhoiChieu", movie.ngayKhoiChieu);
    formData.append("maNhom", "GP01");

    return axiosClient.post(`QuanLyPhim/ThemPhimUploadHinh`, formData);
  },
};

export default movieAPI;
