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
    this.setState({ value: event.target.value });
  };

  handleSumbit(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.inputKeyword}
        />
        <input type="submit" value="Search!" />
      </form>
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
