import React, { Component } from "react";
import "./Likes.css";

export default class Quote extends Component {
  state = {
    numLikes: 0
  };
  incrementLikes = () => {
    this.setState({
      numLikes: this.state.numLikes + 1
    });
  };

  decrementLikes = () => {
    this.setState({
      numLikes: this.state.numLikes - 1
    });
  };

  render() {
    const {} = this.props;
    return (
      <div>
        <div>{this.props.quoteText}</div>
        <div>Wisely spoken by: {this.props.quoteAuthor}</div>
        <br />
        <div className="likeElement">
          <div className="Display">
            This quote has <b>{this.state.numLikes}</b> likes!
          </div>
          <br />
          <div className="arrow-up" onClick={this.incrementLikes}></div>
          <div className="arrow-down" onClick={this.decrementLikes}></div>
        </div>
        <br />
      </div>
    );
  }
}
