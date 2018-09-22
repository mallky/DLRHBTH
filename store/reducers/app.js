import * as types from "../types/types";

const initialState = {
  header: 'Статьи:',
  isPreview: true,
  id: 0
};

const app = (state = initialState, action) => {
  switch (action.type) {

    case types.TO_POST:
      return {
        ...state,
        isPreview: false,
        header: action.content.header,
        id: action.content.id
      }
    case types.TO_PREVIEW:
      return {
        ...state,
        isPreview: true,
        header: 'Статьи:'
      }

    default:
      return state;
  }
};

export default app;