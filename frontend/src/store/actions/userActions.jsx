import axios from "../../api/apiconfig";
import { loadUser } from "../reducers/userSlice";

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
    console.log(data);
  } catch (error) {
    const errorMsg = error?.response?.data?.message || "Login failed";
    alert(errorMsg);
  }
};
