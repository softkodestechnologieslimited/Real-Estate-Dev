import React, { useState } from "react";
import { Container, Nav, Row, Col, Form, Button } from "react-bootstrap";
import { FaLaravel } from "react-icons/fa";
import { BsPaypal } from "react-icons/bs";
import Visa from "../images/Visa.png";
import Mastercard from "../images/Mastercard.png";

function PaymentForm() {
  const [validated, setValidated] = useState(false);
  const [agree, setAgree] = useState(false);

  const radioHandler = () => {
    setAgree(!agree);
  };

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
              type="email"
              placeholder="$ 500    onboarding fee"
            />
          </Form.Group>

          <div className="mb-3">
            <Form.Check type="radio" id={`check-api-paypal`}>
              <Form.Check.Input type="radio" isValid onChange={radioHandler} />
              <Form.Check.Label>{`Paypal  ${(<BsPaypal />)}`}</Form.Check.Label>
            </Form.Check>
            <Form.Check type="radio" id={`check-api-creditcard`}>
              <Form.Check.Input type="radio" isValid />
              <Form.Check.Label>{`Creditcard  ${Visa} ${Mastercard}`}</Form.Check.Label>
            </Form.Check>
          </div>
          <Button
            className="continue-button"
            lg={3}
            md={3}
            sm={1}
            as={Col}
            variant="primary"
            type="submit"
            disabled={!agree}
          >
            Proceed to Pay
          </Button>
        </Row>
      </Form>
    </Container>
  );
}

export default PaymentForm;
