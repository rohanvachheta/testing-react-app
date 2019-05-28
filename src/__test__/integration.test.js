import React from "react";
import { mount } from "enzyme";
import Root from "Root";
import App from "components/App";
import moxios from "moxios";
let wrapped;

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "fetch1" }, { name: "fetch2" }]
  });
});
afterEach(() => {
  moxios.uninstall();
});

it("can fetch the multiple comment request and show it to screen", () => {
  wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  wrapped.find(".fetch-comments").simulate("click");

  //   here we will add pause the request response because for writing down the list

  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(2);
    wrapped.unmount();
  });
});
