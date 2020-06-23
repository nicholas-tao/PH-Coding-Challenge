import React, { Component } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

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

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: false,
      errorCount: null,
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
    this.setState({ formValid: validateForm(this.state.errors) });
    this.setState({ errorCount: countErrors(this.state.errors) });
  };

  render() {
    const { errors, formValid } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>Get in Touch</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName form-group">
              <input
                type="text"
                name="firstName"
                onChange={this.handleChange}
                noValidate
                placeholder="First Name"
                className="form-control input-fields"
              />
              {errors.firstName.length > 0 && (
                <span className="error">{errors.firstName}</span>
              )}
            </div>
            <div className="lastName form-group">
              <input
                type="text"
                name="lastName"
                onChange={this.handleChange}
                noValidate
                placeholder="Last Name"
                className="form-control input-fields"
              />
              {errors.lastName.length > 0 && (
                <span className="error">{errors.lastName}</span>
              )}
            </div>
            <div className="email form-group">
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                noValidate
                placeholder="Email address"
                className="form-control input-fields"
              />
              {errors.email.length > 0 && (
                <span className="error">{errors.email}</span>
              )}
            </div>
            <div className="message form-group">
              <textarea
                name="message"
                onChange={this.handleChange}
                noValidate
                placeholder="Your Message"
                className="form-control input-fields"
              />
              {errors.message.length > 0 && (
                <span className="error">{errors.message}</span>
              )}
            </div>
            {this.state.errorCount !== null ? (
              <p className="form-status">
                Form is {formValid ? "valid ✅" : "invalid ❌"}
              </p>
            ) : (
              ""
            )}
            <div className="submit">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FormComponent;
