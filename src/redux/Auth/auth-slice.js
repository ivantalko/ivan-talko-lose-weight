import { createSlice } from '@reduxjs/toolkit';
import { StatusForAll } from 'redux/Status';
import { loginUserOperation, logoutUserOperation } from './auth-operations';

const initialState = {
  // user: { username: null, email: null },
  sid: null,
  accessToken: null,
  refreshToken: null,
  status: StatusForAll.init,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [loginUserOperation.pending](state) {
      state.status = StatusForAll.loading;
    },
    [loginUserOperation.fulfilled](state, action) {
      state.status = StatusForAll.success;
      // state.user = action.payload.user;
      state.sid = action.payload.sid;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    [loginUserOperation.rejected](state) {
      state.status = StatusForAll.error;
      // state.user = null;
      state.sid = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
    [logoutUserOperation.pending](state) {
      state.status = StatusForAll.loading;
    },
    [logoutUserOperation.fulfilled]() {
      return initialState;
    },
    [logoutUserOperation.rejected](state) {
      state.status = StatusForAll.error;
    },
    // [refreshOperation.pending](state) {
    //   state.status = StatusForAll.loading;
    // },
    // [refreshOperation.fulfilled](state, action) {
    //   state.status = StatusForAll.success;
    //   state.sid = action.payload.sid;
    //   state.accessToken = action.payload.newAccessToken;
    //   state.refreshToken = action.payload.newRefreshToken;
    // },
    // [refreshOperation.rejected](state) {
    //   state.status = StatusForAll.error;
    //   state.username = null;
    //   state.email = null;
    //   state.token = null;
    // },
  },
});
export default authSlice.reducer;
