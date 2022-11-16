import React from "react";
import { Route, Router, Routes } from "react-router";
import * as ROUTES from "./Routes/routes";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={ROUTES.SIGNIN} element={<SignIn />} />
          <Route path={ROUTES.SIGNIN} element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
