import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../../API/API";
import { Cookies } from "react-cookie";
const initialState = {
  user: "",
  status: "idle",
  error: "",
  loading: false,
  token: "",
};

export const authLoginThunk = createAsyncThunk(
  "auth/fetchUser",
  async (args, { rejectWithValue }) => {
    const { res, err } = await API("user/login", "post", args);
    if (res) {
      return res.data.user;
    }
    if (err) {
      throw rejectWithValue(err.response.data.message);
    }
  }
);




const authSlicer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout:  (state, action) => {
      state.user = "";
      state.token = "";
      // get token from cookie
      const cookies = new Cookies();
      const token = cookies.get("token");

      // check if user is loged in befor
      if (token) {
        // delete token from cookie
        cookies.set("token", "", { expires: new Date() });


        // delete user from local storage
        localStorage.removeItem("user");

      }
      if (!token) {
        localStorage.removeItem("user");
      }

    },
  },
  extraReducers: {
    [authLoginThunk.pending]:  (state) => {
      state.loading = true;
      state.status = "pending";
      console.log("pending");
    },
    [authLoginThunk.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.user = payload;
        state.status = "successfully";
        state.error = "";
        localStorage.setItem("user", JSON.stringify(payload));
        console.log(payload)
        console.log("successfully");
        const cookies = new Cookies();
        cookies.set("token", payload.token);
        const token =  cookies.get("token");
        state.token = token;
        console.log(state.user)
    },
    [authLoginThunk.rejected]: (state, { payload }) => {
      state.loading = false;
      state.user = "";
      state.status = "failed";
      state.error = payload;
      console.log(payload);
    },
  },
});

// reducer to store
export default authSlicer.reducer;

// export selectors
export const GetUserSelector = (state) => state.auth.user;
export const GetUserStatusSelector = (state) => state.auth.status;
export const GetUserErrorSelector = (state) => state.auth.error;
export const GetUserLoadingSelector = (state) => state.auth.loading;

//export actions 
export const {logout} = authSlicer.actions
