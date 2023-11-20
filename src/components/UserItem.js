import React from "react";

export default class UserItem extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.user.login}</p>
        <p>{this.props.user.html_url}</p>
      </div>
    );
  }
}
