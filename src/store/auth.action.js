import { URL_AUTH_SIGN_UP, URL_AUTH_SIGN_IN } from "../utils/firebase/index";
import { createSlice } from "@reduxjs/toolkit";

export const authTypes = {
    SIGN_UP: "SIGN_UP",
    SIGN_IN: "SIGN_IN",
};

const { SIGN_UP, SIGN_IN } = authTypes;

const initialState = {
  token: null,
  userId: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {
      state.auth = action.payload;
    },
    log: (state, action) => {
      state.auth = action.payload;
    },
  },

});

export const { register, log } = authSlice.actions;

export const signUp = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGN_UP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      if (!response.ok) {
        throw new Error("Error...");
      }

      const data = await response.json();
      //console.log(data)
      dispatch(register({ type: SIGN_UP, token: data.idToken, userId: data.localId}));
    } catch (error) {
      console.log(error);
    }
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGN_IN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      const data = await response.json();

      //console.log("data", data);
      dispatch(log({ type: SIGN_IN, token: data.idToken, userId: data.localId}));
    } catch (error) {
      console.log(error);
      console.log('aca');

    }
  };
};





export default authSlice.reducer;
