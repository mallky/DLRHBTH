import * as types from "../types/types";

const initialState = {
  header: null,
  footer: null,
  pages: []
};

const app = (state = initialState, action) => {
  switch (action.type) {

    case types.SET_HEADER:
      return {
        ...state,
        header: action.header
      }
    case types.SET_FOOTER:
      return {
        ...state,
        footer: action.footer
      }
    case types.ADD_TO_PAGES:
      return {
        ...state,
        pages: [...state.pages, action.page]
      }

    default:
      return state;
  }
};

export default app;