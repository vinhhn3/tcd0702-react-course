import { Component } from "react";
import "./App.css";

class App extends Component {
  // Properties
  state = {
    fullName: "Vinh Hoang", // read only
    age: 18,
  };

  // Methods
  increaseAge = () => {
    this.setState({ age: this.state.age + 1 });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <p>My name is {this.state.fullName}</p>
        <p>I am {this.state.age} years old</p>
        <button onClick={this.increaseAge}>Increase age</button>
      </div>
    );
  }
}

export default App;
