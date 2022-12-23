import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaLaravel } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import HeadShot from "../images/123_1.jpeg";
import { BsFillCaretDownFill } from "react-icons/bs";

function NavbarHome() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Nav variant="pills" defaultActiveKey="#" activeKey="#">
          <Nav.Item className="proty-NavBar">
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
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/dashboard" style={{ color: "black" }}>
              Dashboard
            </Nav.Link>
            <Nav.Link href="/property" style={{ color: "black" }}>
              Property
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#alert">
              <FiBell />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#account">
              <img
                src={HeadShot}
                className="rounded-circle"
                height={30}
                width={30}
                alt="headshot"
              />
            </Nav.Link>
            <NavDropdown
              height={50}
              width={50}
              title={<BsFillCaretDownFill />}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHome;
