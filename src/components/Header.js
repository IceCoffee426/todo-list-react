import React, { Component, useState } from "react";

function Button({ funct }) {
  // const sayHi = function () {
  //   console.log("Hi");
  // };

  return (
    <button className="hello-btn" onClick={funct}>
      Hello!
    </button>
  );
}

export default function Header({ appName }) {
  const [count, setCount] = useState(0);

  const countUp = function () {
    // MUST ALWAYS USE SET STATE, DO NOT MODIFY STATE WITHOUT USING THIS FUNCTION
    //   The count state doesn't fully update until after the function has completed,
    // so the console.log is 1 iteration behind the value in the "p" element below
    setCount((count) => count + 1);
    console.log(`Button has been clicked ${count} times.`);
  };

  return (
    <div className="header">
      <h1 className="title">{appName}</h1>
      <Button funct={countUp} />
      <p className="count">You clicked on the button {count} time(s).</p>
    </div>
  );
}
