import React from "react";
import Search from "../components/Search";
import Users from "../components/Users";

function Home(props) {
  return (
    <div>
      <Search handleSearch={props.handleSearch} />
      <Users usersData={props.usersData} />
    </div>
  );
}

export default Home;
