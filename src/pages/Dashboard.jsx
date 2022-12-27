import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Modal, Button } from "react-bootstrap";
import NavbarHome from "../components/Navbar";
import CodeQR from "../images/QR.png";
import "../App.css";

function Dashboard() {
  const [show, setShow] = useState(false);
  const [QR, setQR] = useState(false);
  const [validated, setValidated] = useState(false);

  const [formState, setFormState] = useState({
    amount: "",
    id: "",
  });

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
    if (value.length > 0) {
      setValidated(true);
    } else {
      setValidated(false);
    }
  };

  function copy() {
    let copyText = document.querySelector("#input");
    copyText.select();
    document.execCommand("copy");
  }

  //   function transaction(transactionType) {}

  return (
    <>
      <NavbarHome />
      <Container fluid className="dashboard">
        <Row>
          <Col lg={{ span: 3, offset: 1 }}>
            <Container fluid lg={3} className="account rounded">
              <Row>
                <Col>
                  <div className="usdc">USDC</div>
                  <div className="current-rate">Curent Rate</div>
                </Col>
                <Col lg={3} className="justify-content-center">
                  <div
                    id="username"
                    className="user rounded d-flex justify-content-center"
                  >
                    John
                  </div>
                </Col>
              </Row>
              <Row>
                <div id="money" className="money">
                  0000.00
                </div>
              </Row>
              <Row>
                <Col
                  className="d-flex rounded-bottom justify-content-center"
                  style={{ backgroundColor: "#96AC56", cursor: "pointer" }}
                  onClick={() => setQR(true)}
                >
                  <div style={{ color: "#fff" }}>Fund Wallet</div>
                </Col>
                <Col
                  className="d-flex rounded-bottom justify-content-center"
                  style={{ backgroundColor: "#DF6666", cursor: "pointer" }}
                  onClick={() => setShow(true)}
                >
                  <div style={{ color: "#fff" }}>Withdraw</div>
                </Col>
              </Row>
            </Container>
            <Container className="transactions rounded">
              <Row>
                <div className="lastest">Lastest Transaction</div>
              </Row>
              <Row>
                <div className="not-yet">No Transactions yet</div>
              </Row>
            </Container>
          </Col>
          <Col lg={{ span: 7, offset: 1 }}>
            <Container className="property rounded-top">
              <Row>
                <div>Opps.. You haven’t uploaded any property yet.</div>
              </Row>
              <Row>
                <form method="post" encType="multipart/form-data">
                  <div>
                    <label htmlFor="file">Upload Property</label>
                    <input type="file" id="file" name="file" multiple />
                  </div>
                </form>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Modal
        show={QR}
        onHide={() => setQR(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body className="d-flex justify-content-center flex-column">
          <div className=" d-flex justify-content-center mb-4">
            Your Wallet ID
          </div>
          <div className="d-flex justify-content-center mb-4">
            <img src={CodeQR} alt="QR" height={200} width={200} />
          </div>
          <div className="d-flex justify-content-center mb-4 flex-column">
            <div className="d-flex justify-content-center   ">
              USDC wallet address
            </div>
            <div className="d-flex justify-content-center flex-row">
              <input id="input" type="text" />{" "}
              <button id="copy" onClick={copy}>
                Copy
              </button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setQR(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row lg={12} className="flex-column forms">
              <Form.Group
                lg={10}
                as={Col}
                controlId="formAccount"
                className="mb-5"
              >
                <Form.Control
                  type="text"
                  placeholder="Account"
                  aria-label="Account"
                  disabled
                  readOnly
                />
              </Form.Group>
              <Form.Group
                lg={10}
                md={10}
                sm={10}
                as={Col}
                className="mb-5"
                controlId="formAmount"
              >
                <Form.Control
                  required
                  size="lg"
                  type="number"
                  placeholder="Amount"
                  name={`amount`}
                  onChange={updateValue}
                />
              </Form.Group>
            </Row>
            <Row lg={12} className="flex-column forms">
              <Form.Group
                lg={10}
                md={10}
                sm={10}
                as={Col}
                className="mb-5"
                controlId="formId"
              >
                <Form.Control
                  required
                  size="lg"
                  type="text"
                  placeholder="Address ID"
                  name={`id`}
                  onChange={updateValue}
                />
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <button
            className="continue-button2 col-lg-3 col-md-3 col-sm-3"
            type="submit"
            disabled={!validated}
            style={{
              backgroundColor: !validated ? "gray" : "#39375b",
            }}
          >
            Send
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Dashboard;
