import React, { Component } from "react";
import Button from "./Button";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.countUp = this.countUp.bind(this);
  }

  countUp() {
    // MUST ALWAYS USE SET STATE, DO NOT MODIFY STATE WITHOUT USING THIS FUNCTION
    this.setState({ count: (this.state.count += 1) });
    alert("Hello world! Welcome to my React app.");
    console.log(`${this.state.count} clicks`);
  }

  render() {
    return (
      <div className="header">
        <h1 className="title">{this.props.title}</h1>
        <Button count={this.countUp} />
        <p className="count">
          You clicked on the button {this.state.count} time(s).
        </p>
      </div>
    );
  }
}
