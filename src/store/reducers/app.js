import * as types from "../types/types";

const initialState = {
  isOpen: false,
  position: {
    x: 0,
    y: 0
  }
};

const app = (state = initialState, action) => {
  switch (action.type) {

    case types.OPEN_TOOLTIP:
      return {
        ...state,
        position: action.position,
        isOpen: true
      };

    case types.CLOSE_TOOLTIP:
      return {
        ...state,
        isOpen: false
      };

    default:
      return state;
  }
};

export default app;