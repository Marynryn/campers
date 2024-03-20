import { createSelector } from '@reduxjs/toolkit';

export const selectGetAdverts = state => state.adverts.adverts.items;
export const selectGetFilter = state => state.adverts.filter;
export const selectIsLoading = state => state.adverts.adverts.isLoading;
export const selectError = state => state.adverts.adverts.error;
export const selectVisibleAdverts = createSelector(
  [selectGetAdverts, selectGetFilter],
  (adverts, filter) => {
    return adverts.filter(adverts =>
      adverts.location.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
