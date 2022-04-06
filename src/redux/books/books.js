const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [];

const AddBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

const RemoveBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default: return state;
  }
};

export { AddBook, RemoveBook };
export default BookReducer;
