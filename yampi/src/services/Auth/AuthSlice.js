import { createSlice } from '@reduxjs/toolkit';
import asyncActions from './AuthActions';

const initialState = {
  status: null,
  errormsg: null,
  token: null,
  isAuthenticated: false,
  currentUserData: null,
  confirmCode: null
}

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    onChangeStatus(state, { payload }) {
      state.status = payload;
    },
    onError(state, { payload }) { 
      state.status = 'error';
      state.errormsg= payload;
    },
    setToken(state, { payload }) {
      state.token = payload;
    },
    setUserData(state, { payload }) {
      state.currentUserData = payload;
      state.isAuthenticated = true;
    },
    logout() {
      return initialState;
    }
  }
});

const authActions = { ...authSlice.actions, ...asyncActions }
const authReducer = authSlice.reducer

export { authActions, authReducer};