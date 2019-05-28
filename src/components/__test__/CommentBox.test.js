import React from "react";
import { mount } from "enzyme";
import CommentBox from "../CommentBox";
import Root from "Root";

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);

  expect(wrapped.find("button").length).toEqual(2);
});

describe("the text area", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "new Comment" }
    });
    wrapped.update();
  });

  it("has a text area where user can type in", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new Comment");
  });

  it("when form is submitted ,text area should change and return empty text", () => {
    wrapped.find("form").simulate("submit");
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
