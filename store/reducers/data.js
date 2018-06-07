import * as types from "../types/types";

const initialState = {
  content: {
    header: '',
    pages: [
      {
        content: ''
      }
    ]
  }
}

const data = (state = initialState, action) => {
  switch (action.type) {

    case types.ADD_CONTENT:
      return {
        ...state,
        content: action.content
      };

    default:
      return state;
  }
};

export default data;
