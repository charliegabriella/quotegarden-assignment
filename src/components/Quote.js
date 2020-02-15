import React, { Component } from "react";

export default class Quote extends Component {
  render() {
    const {} = this.props;
    return (
      <div>
        <div>{this.props.quoteText}</div>
        <br />
        <div>Wisely spoken by: {this.props.quoteAuthor}</div>
      </div>
    );
  }
}
