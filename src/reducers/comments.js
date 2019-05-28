import { SAVE_COMMENTS, FETCH_COMMENTS } from "actions/types";
export default (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENTS:
      return [...state, action.payload];

    case FETCH_COMMENTS:
      let data = action.payload.map(comment => {
        return comment.name;
      });
      return [...state, ...data];

    default:
      return state;
  }
};
