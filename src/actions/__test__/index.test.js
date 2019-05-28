import { AddComment } from "actions";
import { SAVE_COMMENTS } from "actions/types";

describe("save comments", () => {
  it("has correct type", () => {
    const actions = AddComment();
    expect(actions.type).toEqual(SAVE_COMMENTS);
  });

  it("has the currect payload", () => {
    const actions = AddComment("new Comment");

    expect(actions.payload).toEqual("new Comment");
  });
});
