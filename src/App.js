import { Component } from "react";
import "./App.css";
import Body from "./layout/Boby";
import Navbar from "./layout/Navbar";

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
        <Navbar />
        <Body />
      </div>
    );
  }
}

export default App;
