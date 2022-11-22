import React, { useState } from "react";
import { Container, Nav, Row, Col, Form, Button } from "react-bootstrap";
import { FaLaravel } from "react-icons/fa";

function SignInForm() {
  const [validated, setValidated] = useState(false);
  const [agree, setAgree] = useState(false);
  const [formState, setFormState] = useState({ email: "", password: "" });

  const checkboxHandler = (e) => {
    setAgree(!agree);
    if (
      formState.email.length > 0 &&
      formState.password.length > 0 &&
      !agree === true
    ) {
      setValidated(true);
    } else {
      setValidated(false);
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  // const checkFormValue = () => {
  //   if (
  //     formState.email.length <= 0 &&
  //     formState.password.length <= 0 &&
  //     agree === true
  //   )
  //     setValidated(false);
  // };

  const updateValue = (e) => {
    const { name, value } = e.target;
    const newFormState = { ...formState };
    newFormState[name] = value;
    setFormState(newFormState);
    if (value.length > 0 && agree === true) {
      setValidated(true);
    } else {
      setValidated(false);
      console.log(value.length);
      console.log(agree);
    }
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
              name={`email`}
              onChange={updateValue}
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
              name={`password`}
              onChange={updateValue}
            />
          </Form.Group>

          <div>
            <input
              type="checkbox"
              id="agree"
              value={agree}
              onChange={(e) => checkboxHandler(e)}
            />
            <span> </span>
            <label htmlFor="agree" className="mb-4">
              {" "}
              I have read and agree to all{" "}
              <a
                href="#"
                alt="terms and conditions"
                style={{ textDecoration: "none" }}
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
          {/* <Button
            className="continue-button"
            lg={3}
            sm={1}
            as={Col}
            variant="primary"
            type="submit"
            disabled
          >
            Continue
          </Button> */}
          <button className="continue-button" disabled={!validated}>
            Continue
          </button>
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
