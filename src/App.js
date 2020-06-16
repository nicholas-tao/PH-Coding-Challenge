import React from "react";
import "./App.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import icon from "./images/icon.png";

function App() {
  return (
    <div className="wrapper">
      <Container>
        <Row>
          <Col>
            <div className="img">
              <img src={icon} className="email-icon" alt="Email Icon" />
            </div>
          </Col>
          <Col>
            <div className="form">
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control type="email" placeholder="Last Name" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control type="email" placeholder="Email address" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows="3" placeholder="Message" />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="submit-button"
                >
                  Send Email
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
