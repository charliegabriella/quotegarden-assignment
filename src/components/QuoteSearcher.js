import React, { Component } from "react";
import Quote from "./Quote";
import Search from "./Search";

export default class QuoteSearcher extends Component {
  state = {
    fetching: false,
    quotes: [],
    numLikes: 0,
    numDislikes: 0
  };

  search = async keyword => {
    this.setState({ fetching: true });
    const response = await fetch(
      `https://quote-garden.herokuapp.com/quotes/search/${encodeURIComponent(
        keyword
      )}`
    );
    // .then(result => response.json())
    // .then(quotjes => {
    //   this.setState({ quotes: quotjes.results, fetching: false });
    // });

    const parsedData = await response.json();
    const resultData = [...parsedData.results];
    this.setState({
      fetching: true,
      quotes: resultData.map(quote => {
        return {
          numLikes: 0,
          numDislikes: 0
        };
      })
    });
  };

  incrementLikes = () => {
    this.setState({
      numLikes: this.state.numLikes + 1
    });
  };

  decrementLikes = () => {
    this.setState({
      numLikes: this.state.numDislikes + 1
    });
  };

  deleteNumlikes = () => {
    this.setState({ numLikes: this.state.numLikes - 1 });
  };

  deleteNumdislikes = () => {
    this.setState({ numDislikes: this.state.numDislikes - 1 });
  };

  render() {
    const { quotes } = this.state;
    const someQuotes =
      quotes &&
      quotes.map(quote => {
        return (
          <Quote
            quoteText={quote.quoteText}
            quoteAuthor={quote.quoteAuthor}
            id={quote.__id}
            incrementLikes={this.incrementLikes}
            decrementLikes={this.decrementLikes}
            deleteNumlikes={this.deleteNumlikes}
            deleteNumdislikes={this.deleteNumdislikes}
          />
        );
      });

    return (
      <div>
        <h1>Some cool quotes from me to you</h1>
        <div>
          <Search search={this.search} />
        </div>
        <h3>
          Likes : {this.state.numLikes} / Dislikes : {this.state.numDislikes}
        </h3>
        <div className="quotes">
          {this.state.fetching && <p>I'm loading cool quotes for you...</p>}
        </div>
        <div>{someQuotes}</div>
      </div>
    );
  }
}
