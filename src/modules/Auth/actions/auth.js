import authAPI from "../../../services/authAPI";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../constants/auth";

export const login = (values) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    try {
      const data = await authAPI.login(values);
      console.log(data);

      // Lưu thông tin đăng nhập vào localstorage
      localStorage.setItem("user", JSON.stringify(data));

      dispatch({
        type: LOGIN_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: { error },
      });
    }
  };
};

export const register = (values, callback) => {
  return async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });

    try {
      await authAPI.register(values);
      callback();
      // dispatch({ type: REGISTER_SUCCESS });
    } catch (error) {
      dispatch({
        type: REGISTER_FAILURE,
        payload: { error },
      });
    }
  };
};
