import React, { Component } from "react";
import Button from "./Button";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <h1 className="title">{this.props.title}</h1>
        <Button />
      </div>
    );
  }
}
