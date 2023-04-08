import React, { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.sayHi = this.sayHi.bind(this);
  }

  sayHi() {
    alert("Hello world! Welcome to my React app.");
    console.log(`You clicked on ${this.constructor.name}`);
  }

  render() {
    return <button onClick={this.sayHi}>Hello</button>;
  }
}
