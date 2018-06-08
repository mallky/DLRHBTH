import * as types from "../types/types";

export const addContent = (content) => ({
  type: types.ADD_CONTENT,
  content
});

export const setHeader = (header) => ({
  type: types.SET_HEADER,
  header
});

