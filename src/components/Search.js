import React, { Component } from "react";

export default class Search extends Component {
  state = {
    keyword: ""
  };
  //   this.state = { value: "" };

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSumbit.bind(this);
  // }

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

//   change = input => {
//     this.setState({
//       [input.target.keyword]: input.target.value
//     });
//   };

//   onSubmit = input => {
//     input.preventDefault();
//     console.log(this.state);
//   };

//   render() {
//     return (
//       <div>
//         <form>
//           <h4>Search</h4>
//           <input
//             keyword="keyword"
//             placeholder="Search"
//             value={this.state.keyword}
//             onChange={input => this.change(input)}
//           />
//           <button onClick={() => this.onSubmit()}>Search!</button>
//         </form>
//       </div>
//     );
//   }
// }
