import { useState } from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import { getUser, searchUsers } from "./api/githubApi";
import Navbar from "./layout/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import User from "./pages/User";

const App = () => {
  const [usersData, setUsersData] = useState([]);
  const [userData, setUserData] = useState({});

  const handleSearch = async (text) => {
    const response = await searchUsers(text);
    setUsersData(response.data.items);
  };

  const getDetails = async (loginId) => {
    const response = await getUser(loginId);
    setUserData(response.data);
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
            <Route exact path="/user/:loginId">
              <User getDetails={getDetails} userData={userData} />
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
