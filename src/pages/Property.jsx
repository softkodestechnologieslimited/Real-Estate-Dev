import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Property() {
  return (
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
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Property;
