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

    default:
      return state;
  }
};

export default app;