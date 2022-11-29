import React, { useState, useEffect } from "react";
import { Container, Nav, Row, Col, Form } from "react-bootstrap";
import { FaLaravel } from "react-icons/fa";
import { BsPaypal } from "react-icons/bs";

function SignInForm() {
  const [validated, setValidated] = useState(false);
  const [agree, setAgree] = useState(false);
  const [colorgray, setColorGray] = useState(false);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    payment: "",
  });
  const disableButtonChange = (data) => {
    setColorGray(true);
  };

  const [show, setShow] = useState();
  function toggleShow() {
    setShow(!show);
  }
  const radioHandler = (e) => {
    setAgree(!agree);
    if (formState.payment.length > 0 && !agree === true) {
      setValidated(true);
    } else {
      setValidated(false);
    }
  };

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

      {!show && (
        <>
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

              <button
                colorgray={colorgray}
                disableButtonChange={disableButtonChange}
                className="continue-button"
                style={{
                  backgroundColor: `${(props) =>
                    props.colorgray ? "gray" : "#39375b"}`,
                }}
                disabled={!validated}
                onClick={toggleShow}
              >
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
        </>
      )}

      {show && (
        <>
          <Row className="mb-3">
            <Col>
              <div className="title">Make Payment</div>
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
                md={1}
                sm={1}
                as={Col}
                className="mb-5"
                controlId="formBasicPayment"
              >
                <Form.Control
                  required
                  size="lg"
                  type="text"
                  placeholder="$ 500    onboarding fee"
                  name={`payment`}
                  onChange={updateValue}
                />
              </Form.Group>

              {/* <div className="mb-3">
                <Form.Check type="radio" id={`check-api-paypal`}>
                  <Form.Check.Input
                    type="radio"
                    isValid
                    value={agree}
                    onChange={(e) => radioHandler(e)}
                    id={`radio-1`}
                  />
                  <Form.Check.Label>
                    Paypal
                    <BsPaypal />
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="radio" id={`check-api-creditcard`}>
                  <Form.Check.Input
                    type="radio"
                    isValid
                    onChange={(e) => radioHandler(e)}
                    value={agree}
                    id="radio-2"
                  />
                  <Form.Check.Label>{`Creditcard  `}</Form.Check.Label>
                </Form.Check>
              </div> */}

              <div class="form-check">
                <input
                  type="radio"
                  class="form-check-input"
                  id="validationFormCheck1"
                  name="radio-stacked"
                  required
                  isValid
                  onChange={(e) => radioHandler(e)}
                  value={agree}
                />
                <label class="form-check-label" for="validationFormCheck1">
                  Paypal<span> </span>
                  <BsPaypal />
                </label>
              </div>
              <div class="form-check mb-3">
                <input
                  type="radio"
                  class="form-check-input"
                  id="validationFormCheck2"
                  name="radio-stacked"
                  required
                  isValid
                  onChange={(e) => radioHandler(e)}
                  value={agree}
                />
                <label class="form-check-label" for="validationFormCheck2">
                  Creditcard
                </label>
                <div class="invalid-feedback">
                  More example invalid feedback text
                </div>
              </div>
              <button
                className="continue-button"
                colorgray={colorgray}
                disableButtonChange={disableButtonChange}
                type="submit"
                disabled={!validated}
                style={{
                  backgroundColor: `${(props) =>
                    props.colorgray ? "gray" : "#39375b"}`,
                }}
              >
                Proceed to Pay
              </button>
            </Row>
          </Form>
        </>
      )}
    </Container>
  );
}

export default SignInForm;
