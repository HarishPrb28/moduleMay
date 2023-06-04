import { ADD_CARD_TO_DETAILS } from "../actions/actionTypes";

const initialState = {
  post: {},
};

const detailsReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD_TO_DETAILS:
      return {
        ...state,
        post: action.payload,
      };
    default:
      return state;
  }
};

export default detailsReducers;
