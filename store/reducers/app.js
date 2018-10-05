import * as types from "../types/types";

const initialState = {
  id: 0
};

const app = (state = initialState, action) => {
  switch (action.type) {

    case types.TO_POST:
      return {
        ...state
      }
    case types.TO_PREVIEW:
      return {
        ...state
      }

    default:
      return state;
  }
};

export default app;