import axios from "axios";
import { useState } from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Navbar from "./layout/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

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
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home usersData={usersData} handleSearch={handleSearch} />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
