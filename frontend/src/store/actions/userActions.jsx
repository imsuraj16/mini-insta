import axios from "../../api/apiconfig";
import { loadUser, logout } from "../reducers/userSlice";

export const registerUser = (registerData) => async (dispatch) => {
  try {
    const { data } = await axios.post("/api/auth/register", registerData);
    dispatch(loadUser(data.newUser));
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const loginUser = (loginData) => async (dispatch) => {
  try {
    const { data } = await axios.post("/api/auth/login", loginData);
    dispatch(loadUser(data.user));
  } catch (error) {
    const errorMsg = error?.response?.data?.message || "Login failed";
    alert(errorMsg);
  }
};

export const currentUser = () => async (dispatch) => {
  const { data } = await axios.get("/user/me");
  dispatch(loadUser(data));
};

export const logoutUser = () => async (dispatch) => {
  await axios.get("/user/logout");
  dispatch(logout());
};
