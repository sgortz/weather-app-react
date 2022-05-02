import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./App.css";
import Weather from "./Weather.js";
import Footer from "./Footer.js";



function App() {
  return (
    <div className="App">
      <Card className="Wrapper">
        <Card.Body>
          <div className="container">
            <Weather defaultCity="New York City" />
          </div>
        </Card.Body>
      </Card>
      <Footer />
    </div>
  );
}

export default App;