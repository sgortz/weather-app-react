import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <i className="fab fa-github"></i>{" "}
      <a
        href="https://github.com/sgortz/weather-app-react-v2"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code
      </a>{" "}
      by Sabrina Gortz
    </footer>
  );
}

export default Footer;
