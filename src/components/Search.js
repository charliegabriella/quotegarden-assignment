import React, { Component } from "react";

export default class Search extends Component {
  state = {
    search: ""
  };

  inputKeyword = event => {
    this.setState({ keyword: event.target.value });
  };

  handleSumbit = event => {
    event.preventDefault();
    this.props.search(this.state.keyword);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.keyword}
            onChange={this.inputKeyword}
          />
          <button type="submit">Search!</button>
        </form>
      </div>
    );
  }
}
