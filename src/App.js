import React, { Component } from "react";
import "./App.css";
//import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import icon from "./images/icon.png";
import FormComponent from "./FormComponent.js";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={icon} className="email-icon" alt="Email Icon" />
          </div>
          <div className="col form-comp">
            <FormComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
