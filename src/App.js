import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import icon from "./images/icon4.png";
import FormComponent from "./FormComponent.js";

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
              <FormComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
