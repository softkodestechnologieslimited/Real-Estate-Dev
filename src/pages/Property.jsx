import React from "react";
import NavbarHome from "../components/Navbar";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { GoPlus } from "react-icons/go";
import APT1 from "../images/Apartment-1.png";
import APT2 from "../images/Apartment-2.png";
import APT3 from "../images/Apartment-3.png";
import APT4 from "../images/Apartment-4.png";
function Property() {
  return (
    <>
      <NavbarHome />
      <Container>
        <Row>
          <Col>
            <form role="search">
              <div>
                <input
                  type="search"
                  id="mySearch"
                  name="q"
                  placeholder="Search the site…"
                  aria-label="Search through site content"
                />
                <button>Search</button>
              </div>
            </form>
          </Col>
          <Col>
            <Button>
              <GoPlus />
              Add property
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Img src={APT1} alt="house image" />
              <Card.Header>Penthouse</Card.Header>
              <Card.Body>
                <Card.Title>Property Name</Card.Title>
                <Container>
                  <Row>
                    <Col>Total token</Col>
                    <Col>Remaining</Col>
                  </Row>
                  <Row>
                    <Col>22</Col>
                    <Col>12</Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img src={APT2} alt="house image" />
              <Card.Header>Penthouse</Card.Header>
              <Card.Body>
                <Card.Title>Property Name</Card.Title>
                <Container>
                  <Row>
                    <Col>Total token</Col>
                    <Col>Remaining</Col>
                  </Row>
                  <Row>
                    <Col>22</Col>
                    <Col>12</Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img src={APT3} alt="house image" />
              <Card.Header>Penthouse</Card.Header>
              <Card.Body>
                <Card.Title>Property Name</Card.Title>
                <Container>
                  <Row>
                    <Col>Total token</Col>
                    <Col>Remaining</Col>
                  </Row>
                  <Row>
                    <Col>22</Col>
                    <Col>12</Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img src={APT4} alt="house image" />
              <Card.Header>Penthouse</Card.Header>
              <Card.Body>
                <Card.Title>Property Name</Card.Title>
                <Container>
                  <Row>
                    <Col>Total token</Col>
                    <Col>Remaining</Col>
                  </Row>
                  <Row>
                    <Col>22</Col>
                    <Col>12</Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img src={APT1} alt="house image" />
              <Card.Header>Penthouse</Card.Header>
              <Card.Body>
                <Card.Title>Property Name</Card.Title>
                <Container>
                  <Row>
                    <Col>Total token</Col>
                    <Col>Remaining</Col>
                  </Row>
                  <Row>
                    <Col>22</Col>
                    <Col>12</Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Property;
