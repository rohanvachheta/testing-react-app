import React from "react";
import {
    shallow
} from "enzyme";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import App from "components/App";

let wrapper;

//reuse the variable which we frequently use
beforeEach(() => {
    wrapper = shallow( < App / > );

})

it("shows a comment box", () => {

    expect(wrapper.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {

    expect(wrapper.find(CommentList).length).toEqual(1);
});