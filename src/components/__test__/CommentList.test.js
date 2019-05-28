import React from "react";
import { mount } from "enzyme";

import CommentList from "../CommentList";
import Root from "Root";

let wrapped;

beforeEach(() => {
  const initialstate = {
    comments: ["comment2", "comment1"]
  };
  wrapped = mount(
    <Root initialstate={initialstate}>
      <CommentList />
    </Root>
  );
});
// console.log(wrapped.render().text());

//it will check wethere 2 list item is there in list or not
it("creates one li per comment ", () => {
  expect(wrapped.find("li").length).toEqual(2);
});

it("should be show into screeen", () => {
  expect(wrapped.render().text()).toContain("comment1");
  expect(wrapped.render().text()).toContain("comment2");
});
