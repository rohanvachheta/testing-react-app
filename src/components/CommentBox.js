import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class CommentBox extends Component {
  state = {
    comment: ""
  };

  handleFormSubmit = e => {
    e.preventDefault();

    // TODO- CALL an action
    this.props.AddComment(this.state.comment);

    this.setState({
      comment: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <h4>add a comment</h4>
          <textarea
            value={this.state.comment}
            onChange={e => this.setState({ comment: e.target.value })}
          />
          <button value="submit">submit Comment</button>
          <button
            className="fetch-comments"
            onClick={() => this.props.fetchComments()}
          >
            {" "}
            click for axios comments{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(CommentBox);
