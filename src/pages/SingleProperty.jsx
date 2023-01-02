import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarHome from "../components/Navbar";
import { AiOutlineArrowLeft } from "react-icons/ai";
import APT1 from "../images/Apartment-1.png";

function SingleProperty() {
  return (
    <>
      <NavbarHome />
      <Container>
        <Row>
          <Col>
            <AiOutlineArrowLeft />
            <div>Residential</div>
            <h1>Subtitle</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.{" "}
            </p>
            <h1>Subtitle</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Amet minim mollit non
              deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
              consequat duis enim velit mollit. Exercitation veniam consequat
              sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit
              aliqua dolor do amet sint. Velit officia consequat duis enim velit
              mollit. Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim velit
              mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim
              mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit.{" "}
            </p>
          </Col>
          <Col>
            <Container>
              <img src={APT1} alt="apartment"></img>
            </Container>
            <Container>
              <Row>
                <Col>Property Size</Col>
                <Col>2000 sq. m</Col>
              </Row>
              <Row>
                <Col>Total Token</Col>
                <Col>
                  <div>30</div>
                  <div>152.56</div>
                </Col>
              </Row>
              <Row>
                <Col>Min. Token</Col>
                <Col>
                  <div>2</div>
                  <div>10.17 USDC</div>
                </Col>
              </Row>
              <Row>
                <Col> No. of buyers</Col>
                <Col>12</Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SingleProperty;
