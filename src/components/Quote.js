import React, { Component } from "react";
import "./Likes.css";

export default class Quote extends Component {
  state = {
    numLikes: 0,
    color: "black"
  };

  incrementLikes = () => {
    this.setState({
      color: "pink",
      numLikes: this.state.numLikes + 1
    });
  };

  decrementLikes = () => {
    this.setState({
      color: "grey",
      numLikes: this.state.numLikes - 1
    });
  };

  render() {
    const {} = this.props;
    return (
      <div>
        <div>
          <h3 style={{ color: this.state.color }}> {this.props.quoteText}</h3>{" "}
          {/* change the color of the text when it's*/}
        </div>
        <div>
          <h4>Wisely spoken by: {this.props.quoteAuthor}</h4>
        </div>
        <br />
        <div className="likeElement">
          <div className="Display">
            This quote has <b>{this.state.numLikes}</b> likes!
          </div>
          <br />
          <div className="arrow-up" onClick={this.incrementLikes}></div>
          <div className="arrow-down" onClick={this.decrementLikes}></div>
        </div>
      </div>
    );
  }
}
