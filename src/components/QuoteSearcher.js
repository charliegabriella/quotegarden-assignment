import React, { Component } from "react";
import Quote from "./Quote";

export default class QuoteSearcher extends Component {
  state = {
    fetching: true,
    quotes: []
  };

  componentDidMount = async () => {
    const response = await fetch(
      "https://quote-garden.herokuapp.com/quotes/search/tree"
    )
      .then(result => result.json())
      .then(quotjes => {
        this.setState({ quotes: quotjes.results, fetching: false });
      });
  };

  render() {
    return (
      <div>
        <h1>Some cool quotes from me to you</h1>
        <div className="quotes">
          {this.state.fetching && <p>I'm loading cool quotes for you...</p>}
          {!this.state.fetching &&
            this.state.quotes.map(quote => {
              return (
                <Quote
                  quoteText={quote.quoteText}
                  quoteAuthor={quote.quoteAuthor}
                />
              );
            })}
        </div>
      </div>
    );
  }
}
