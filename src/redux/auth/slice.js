import { createSlice } from '@reduxjs/toolkit';
import { current, login, logout, register } from './operations';

const handleFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
};

const logoutSuccessReducer = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const currentSuccessReducer = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const currentLoadingReducer = state => {
  state.isRefreshing = true;
};

const currentFailedReducer = state => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },
  reducers: {
    resetError(state) {
      state.error = null;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, handleFulfilled)
      .addCase(register.rejected, handleRejected)
      .addCase(login.fulfilled, handleFulfilled)
      .addCase(login.rejected, handleRejected)
      .addCase(logout.fulfilled, logoutSuccessReducer)
      .addCase(current.fulfilled, currentSuccessReducer)
      .addCase(current.pending, currentLoadingReducer)
      .addCase(current.rejected, currentFailedReducer),
});

export const { resetError } = authSlice.actions;
export const authReducer = authSlice.reducer;
