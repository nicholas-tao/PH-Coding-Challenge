/*TO DO:
1. Fix validation (empty form leads to success, partifally form also leads to sucess rn)
*/

import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
/*
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

const countErrors = (errors) => {
  let count = 0;
  Object.values(errors).forEach((val) => val.length > 0 && (count = count + 1));
  return count;
};
*/
/*
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: false,
      errorCount: 0,
      errors: {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      },
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "firstName":
        errors.firstName =
          value.length < 1 ? "Please enter your first name!" : "";
        break;
      case "lastName":
        errors.lastName =
          value.length < 1 ? "Please enter your last name!" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value)
          ? ""
          : "Please enter a valid email address!";
        break;
      case "message":
        errors.message = value.length < 1 ? "Please enter a message!" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    /*
    if (validateForm(this.state.errors)) {
      alert("Email Sent!");
    }
    
    this.setState({ formValid: validateForm(this.state.errors) });
    console.log(this.state.formValid);
    this.setState({ errorCount: countErrors(this.state.errors) });
    console.log(this.state.errorCount);
  };
  */

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  firstNameError: "",
  lastNameError: "",
  emailError: "",
  messageError: "",
};

export default class Form extends React.Component {
  state = initialState;

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let firstNameError = "";
    let lastNameError = "";
    let emailError = "";
    let messageError = "";

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!this.state.firstName) {
      firstNameError = "First name cannot be blank";
    }

    if (!this.state.lastName) {
      lastNameError = "Last name cannot be blank";
    }

    if (!re.test(String(this.state.email).toLowerCase())) {
      emailError = "Invalid email";
    }

    if (!this.state.message) {
      messageError = "Message cannot be blank";
    }

    if (emailError || firstNameError || lastNameError || messageError) {
      this.setState({
        emailError,
        firstNameError,
        lastNameError,
        messageError,
      });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(isValid);
      alert("Email Sent!");
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>Get in Touch</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="form-control input-fields"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </div>
            <div className="lastName form-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="form-control input-fields"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>
            <div className="email form-group">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="form-control input-fields"
                value={this.state.email}
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="message form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                className="form-control input-fields"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </div>
            <span className="error">
              The following fields are empty/invalid:{" "}
              {this.state.firstNameError ? "First Name, " : ""}
              {this.state.lastNameError ? "Last Name, " : ""}
              {this.state.emailError ? "Email address, " : ""}
              {this.state.messageError ? "Message" : ""}
            </span>

            <div className="submit">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
