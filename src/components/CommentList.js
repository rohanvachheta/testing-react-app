import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  renderComments() {
    return this.props.comments
      ? this.props.comments.map((res, index) => {
          return <li key={index}>{res}</li>;
        })
      : "no comments ";
  }
  render() {
    return (
      <div>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

const mapstatetoprops = state => {
  return {
    comments: state.comments
  };
};

export default connect(mapstatetoprops)(CommentList);
