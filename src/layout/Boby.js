import React from "react";
import Search from "../components/Search";
import Users from "../components/Users";

export default class Body extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <Users />
      </div>
    );
  }
}
