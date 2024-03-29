import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <i className="fab fa-github"></i>{" "}
      <a
        href="https://github.com/sgortz/weather-app-react"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open-source code
      </a>{" "}
      by Sabrina Gortz
    </footer>
  );
}

export default Footer;
