import * as types from "../types/types";

const initialState = {
  letterData: {
    id: null,
    letter: ''
  },
  yourLetters: [],
  books: null
};

const appData = (state = initialState, action) => {
  switch (action.type) {

    case types.ADD_LETTER:
      return {
        ...state,
        letterData: action.letterData
      };

    case types.ADD_TO_LETTERS:
      return {
        ...state,
        yourLetters: state.yourLetters.push(action.letter)
      };
    
    case types.SET_BOOKS:
      return {
        ...state,
        books: action.books
      };

    default:
      return state;
  }
};

export default appData;