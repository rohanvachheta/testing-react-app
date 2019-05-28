import commentsReducer from "reducers/comments";
import { SAVE_COMMENTS } from "actions/types";

it("handle actions of type SAVE_COMMENTS", () => {
  const actions = {
    type: SAVE_COMMENTS,
    payload: "new Comment"
  };
  const newState = commentsReducer([], actions);
  expect(newState).toEqual(["new Comment"]);
});

it("actions with unknown type ", () => {
  const newState = commentsReducer([], {});

  expect(newState).toEqual([]);
});
