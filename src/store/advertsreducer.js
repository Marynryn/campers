import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const mySlice = createSlice({
  name: 'adverts',
  initialState: {
    adverts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, (state, action) => {
        state.adverts.isLoading = true;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.adverts.isLoading = false;
        state.error = null;
        state.adverts.items = action.payload;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.adverts.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const advertsReducer = mySlice.reducer;
export const { setFilter } = mySlice.actions;
