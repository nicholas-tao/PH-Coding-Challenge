import React from "react";
//import "./App.css";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
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
        <Button variant="primary" type="submit">
          Send Email
        </Button>
      </Form>
    </div>
  );
}

export default App;
