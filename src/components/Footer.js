import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Header(props) {
  return (
    <footer>
      &copy;
      <a href="https://github.com/shubsmastan" target="_blank">
        ShubsMastan
      </a>
      <a href="https://github.com/shubsmastan" target="_blank">
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
      <p>MMXXIII</p>
    </footer>
  );
}
