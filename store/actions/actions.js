import * as types from "../types/types";

export const addContent = (content) => ({
  type: types.ADD_CONTENT,
  content
});

export const setHeader = (header) => ({
  type: types.SET_HEADER,
  header
});

export const setFooter = (footer) => ({
  type: types.SET_FOOTER,
  footer
});

export const addToPages = (page) => ({
  type: types.ADD_TO_PAGES,
  page
});

