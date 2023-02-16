import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    user: [],
    isLoggedIn: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.user.push(action.payload);
      state.isLoggedIn = true;
    },

    loggedUserOut: (state, action) => {
      state.user.pop();
      state.isLoggedIn = action.payload;
    },
  },
});

export const { addUser, loggedUserIn, loggedUserOut } = userInfoSlice.actions;
export default userInfoSlice.reducer;
