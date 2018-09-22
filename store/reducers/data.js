import * as types from "../types/types";

const initialState = {
  articles: [] 
}

const data = (state = initialState, action) => {
  switch (action.type) {

    case types.ADD_CONTENT:
      return {
        ...state,
        articles: action.articles
      };

    default:
      return state;
  }
};

export default data;
