import * as types from "../types/types";

export const selectLetter = (letterData) => ({
  type: types.ADD_LETTER,
  letterData
});

export const addToYourLetter = (letter) => ({
  type: types.ADD_LETTER,
  letter
});

export const setBooks = (books) => ({
  type: types.SET_BOOKS,
  books
});

export const openTooltip = (position) => ({
  type: types.OPEN_TOOLTIP,
  position
});

export const closeTooltip = () => ({
  type: types.CLOSE_TOOLTIP
});

