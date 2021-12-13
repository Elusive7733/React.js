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
          <Routes>
            <Route
              path="/"
              element={
                <Fragment>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </Fragment>
              }
            />
            <Route
              path="/login"
              element={
                <Fragment>
                  <Login setAuth={(auth: any) => setAuthentication(auth)} />
                  <Link to="/register">Register</Link>
                </Fragment>
              }
            />
            <Route
              path="/register"
              element={
                <Fragment>
                  <Register setAuth={(auth: any) => setAuthentication(auth)} />
                  <Link to="/login">Login</Link>
                </Fragment>
              }
            />
          </Routes>
        </Fragment>
      )}
    </Fragment>
  );
};

export default App;
