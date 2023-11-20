import React from "react";

export default class Search extends React.Component {
  state = {
    text: "",
  };

  handleClick = (e) => {
    e.preventDefault(); // Stop form reloading
    console.log(this.state.text);
    this.props.handleSearch(this.state.text);
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Search"
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick} className="btn btn-dark btn-block">
            Search
          </button>
        </form>
      </div>
    );
  }
}
