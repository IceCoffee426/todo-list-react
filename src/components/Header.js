import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";

export default function Header(props) {
  return (
    <header>
      <a href="#">
        <FontAwesomeIcon
          icon={faSquareCheck}
          className="logo"
          onClick={props.handleClick}
        />
      </a>
      <a href="#">
        <h1 className="title">To-Do List</h1>
      </a>
    </header>
  );
}
