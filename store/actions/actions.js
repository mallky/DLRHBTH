import * as types from "../types/types";

export const addContent = (articles) => ({
  type: types.ADD_CONTENT,
  articles
});

export const toPost = (content) => ({
  type: types.TO_POST,
  content
});

export const toPreview = () => ({
  type: types.TO_PREVIEW
});
