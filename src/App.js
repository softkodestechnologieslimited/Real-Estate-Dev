import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./Routes/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import NavbarHome from "./components/Navbar";
import Property from "./pages/Property";

function App() {
  const [show, setShow] = useState(false);

  return (
    <Router>
      {/* <NavbarHome /> */}
      <>
        <Routes>
          <Route path={ROUTES.SIGNIN} element={<SignIn />} />
          <Route path={ROUTES.SIGNUP} element={<SignUp />} />
          <Route
            path={ROUTES.DASHBOARD}
            element={<Dashboard show={show} setShow={setShow} />}
          />
          <Route
            path={ROUTES.PROPERTY}
            element={<Property show={show} setShow={setShow} />}
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
