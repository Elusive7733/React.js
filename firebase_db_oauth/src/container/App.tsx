import React, { Fragment, useState } from "react";

import Home from "../pages/Home/Home";
import { Link } from "react-router-dom";

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
    </Fragment>
  );
};

export default App;
