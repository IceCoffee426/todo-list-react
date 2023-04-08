import React, { Component, useState } from "react";

function Button({ text }, { funct }) {
  return (
    <button className="btn" onClick={funct}>
      {text}
    </button>
  );
}

export default function Header({ appName }) {
  return (
    <header className="header">
      <img src="./favicon.svg" className="logo"></img>
      <h1 className="title">{appName}</h1>
    </header>
  );
}
