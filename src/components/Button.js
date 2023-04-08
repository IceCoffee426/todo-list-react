import React, { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // this.sayHi = this.sayHi.bind(this);
  }

  // sayHi() {
  //   alert("Hello world! Welcome to my React app.");
  //   this.state.count += 1;
  //   console.log(
  //     `You clicked on ${this.constructor.name} ${this.state.count} times`
  //   );
  // }

  render() {
    return <button onClick={this.props.count}>Hello</button>;
  }
}
