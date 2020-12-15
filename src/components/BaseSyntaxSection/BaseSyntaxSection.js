import React, { Component } from "react";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import './BaseSyntaxSection.css';

class BaseSyntaxSection extends Component {
  state = {
    username: "Kyuubi",
  };

  setUserNameHandler = (event) => {
    this.setState({
        username: event.target.value,
    });
  };
  render() {
    return (
      <div className="BaseSyntaxSection">
        <UserInput
          change={this.setUserNameHandler}
          value={this.state.username}
        />
        <UserOutput name={this.state.username} />
        <UserOutput name="Yosbel" />
        <UserOutput name="Nesti" />
      </div>
    );
  }
}

export default BaseSyntaxSection;
