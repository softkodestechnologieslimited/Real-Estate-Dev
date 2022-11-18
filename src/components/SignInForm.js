import React, { useState } from "react";
import { Container, Nav, Row, Col, Form, Button } from "react-bootstrap";
import { FaLaravel } from "react-icons/fa";

function SignInForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Container fluid className="sideimage">
      <Nav variant="pills" defaultActiveKey="#" activeKey="#">
        <Nav.Item className="proty">
          <Nav.Link
            href="#"
            style={{
              textDecoration: "none",
              color: "antiquewhite",
              backgroundColor: "#37214c",
            }}
          >
            Proty <FaLaravel style={{ color: "antiquewhite" }} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="home">
          <Nav.Link href="/" style={{ textDecoration: "none", color: "black" }}>
            Home
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Row className="mb-3">
        <Col>
          <div className="title">Sign up to get started</div>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.{" "}
          </p>
        </Col>
      </Row>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row lg={3} className="flex-column forms">
          <Form.Group
            lg={3}
            sm={1}
            as={Col}
            className="mb-5"
            controlId="formBasicEmail"
          >
            <Form.Control
              required
              size="lg"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group
            as={Col}
            className="mb-5"
            controlId="formBasicPassword"
            lg={3}
            sm={1}
          >
            <Form.Control
              required
              size="lg"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicCheckbox">
            <Form.Check
              required
              type="checkbox"
              label="I have read and agree to all terms and conditions"
            />
          </Form.Group>
          <Button
            className="continue-button"
            lg={3}
            sm={1}
            as={Col}
            variant="primary"
            type="submit"
          >
            Continue
          </Button>
        </Row>
        <Row>
          <Col>
            <div className="signinLink">
              Have an account already?{" "}
              <a href="/" style={{ textDecoration: "none" }}>
                {" "}
                Sign In
              </a>
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default SignInForm;
