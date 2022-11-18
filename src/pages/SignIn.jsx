import React from "react";
import { Nav } from "react-bootstrap";

function SignIn() {
  return (
    <Nav activeKey="#">
      <Nav.Item>
        <Nav.Link href="#">Signup</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
export default SignIn;
