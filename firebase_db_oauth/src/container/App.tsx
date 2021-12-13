import React, { Fragment, useState } from "react";

import Home from "../pages/Home/Home";
import { Link, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

//todo: set authentication
const App: React.FC = () => {
  const [isAuthenticated, setAuthentication] = useState(false);

  //todo: Add Routing
  return (
    <Fragment>
      {isAuthenticated ? (
        <Home />
      ) : (
        <Fragment>
          <Link to="/login">Login</Link>
          <Link to="/register">register</Link>
        </Fragment>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Fragment>
  );
};

export default App;
