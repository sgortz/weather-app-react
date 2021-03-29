import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather.js";
import Footer from "./Footer";
import Card from "react-bootstrap/Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Card className="Wrapper">
        <Card.Body>
          <div className="container">
            <Weather defaultCity="Rio de Janeiro" />
          </div>
        </Card.Body>
      </Card>
      <Footer />
    </div>
  );
}

export default App;
