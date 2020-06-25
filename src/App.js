import React, { Component } from "react";
import "./assets/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import icon from "./images/icon4.png";
import Form from "./Form.js";

class App extends Component {
  render() {
    return (
      <div class="wrapper1">
        <div className="container ">
          <div className="row">
            <div className="col">
              <img src={icon} className="email-icon" alt="Email Icon" />
            </div>
            <div className="col form-comp">
              <Form />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
