import axios from "axios";
import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Users from "./components/Users";
import Navbar from "./layout/Navbar";

const App = () => {
  const [usersData, setUsersData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    console.log(text);
    axios
      .get(`https://api.github.com/search/users?q=${text}`)
      .then((response) => {
        console.log(response);
        setUsersData(response.data.items);
      });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Search handleSearch={handleSearch} />
        <Users usersData={usersData} />
      </div>
    </div>
  );
};

export default App;
