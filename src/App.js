import axios from "axios";
import { Component } from "react";
import "./App.css";
import Users from "./components/Users";
import Navbar from "./layout/Navbar";

class App extends Component {
  state = {
    usersData: [],
  };
  componentDidMount() {
    axios.get("https://api.github.com/users").then((response) => {
      this.setState({ usersData: response.data });
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users usersData={this.state.usersData} />
        </div>
      </div>
    );
  }
}

export default App;
