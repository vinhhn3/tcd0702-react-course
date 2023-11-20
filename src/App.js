import axios from "axios";
import { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import Users from "./components/Users";
import Navbar from "./layout/Navbar";

class App extends Component {
  state = {
    usersData: [],
    searchText: "",
  };

  handleSearch = (text) => {
    console.log(text);
    axios
      .get(`https://api.github.com/search/users?q=${text}`)
      .then((response) => {
        console.log(response);
        this.setState({ usersData: response.data.items });
      });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search handleSearch={this.handleSearch} />
          <Users usersData={this.state.usersData} />
        </div>
      </div>
    );
  }
}

export default App;
