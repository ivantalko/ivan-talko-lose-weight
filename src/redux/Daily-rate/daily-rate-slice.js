import { createSlice } from '@reduxjs/toolkit';
import { fetchDailyRate } from './daily-rate-operations';

export const dailylState = {
  isLoading: false,
  error: null,
  dailyRate: null,
  notAllowedProducts: [],
};

const dailyRateSlice = createSlice({
  name: 'daily',
  initialState: dailylState,
  extraReducers: {
    [fetchDailyRate.pending](state) {
      state.isLoading = true;
    },
    [fetchDailyRate.fulfilled](state, action) {
      state.isLoading = false;
      state.dailyRate = action.payload.dailyRate;
      state.notAllowedProducts = action.payload.notAllowedProducts.slice(0, 5);
    },

    [fetchDailyRate.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const dailyRateReducer = dailyRateSlice.reducer;
