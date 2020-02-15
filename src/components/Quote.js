import React, { Component } from "react";
import "./Likes.css";

export default class Quote extends Component {
  state = {
    numLikes: 0,
    color: "black"
  };

  handleNumlikes = () => {
    this.setState({
      numLikes: true
    });

    if (this.state.numLikes === null) {
      this.props.setLikes();
    }

    if (this.state.numLikes === false) {
      this.props.setLikes();
      this.props.deletenumDislikes();
    }
  };

  handleNumdislikes = () => {
    this.setState({
      numLikes: false
    });

    if (this.state.numLiked === true) {
      this.props.setDisliked();
      this.props.deleteNumliked();
    }

    if (this.state.numLiked === null) {
      this.props.setDisliked();
    }
  };
  incrementLikes = () => {
    this.setState({
      color: "pink"
    });
  };

  decrementLikes = () => {
    this.setState({
      color: "grey"
    });
  };

  render() {
    const {} = this.props;
    return (
      <div>
        <div>
          <h3 style={{ color: this.state.color }}> {this.props.quoteText}</h3>
          {/* change the color of the text when it's*/}
        </div>
        <div>
          <h4>Wisely spoken by: {this.props.quoteAuthor}</h4>
        </div>
        <br />
        <div className="likeElement">
          <div className="arrow-up" onClick={this.incrementLikes}>
            {" "}
            {this.handleNumlikes}
          </div>
          <div className="arrow-down" onClick={this.decrementLikes}>
            {" "}
            {this.handleNumdislikes}
          </div>
        </div>
      </div>
    );
  }
}

// <div className="Display">
// This quote has <b>{this.state.numLikes}</b> likes!
// </div>
