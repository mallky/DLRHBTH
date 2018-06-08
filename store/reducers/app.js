import * as types from "../types/types";

const initialState = {
  header: null
};

const app = (state = initialState, action) => {
  switch (action.type) {

    case types.SET_HEADER:
      return {
        ...state,
        header: action.header
      }

    default:
      return state;
  }
};

export default app;