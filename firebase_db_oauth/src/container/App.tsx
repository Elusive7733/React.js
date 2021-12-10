import React, { useState } from "react";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";

const App: React.FC = () => {
  const [isAuthenticated, setAuthentication] = useState(false);

  const loginHandler = (isAuth: boolean) => {
    setAuthentication(isAuth);
  };
  const registerHandler = (isAuth: boolean) => {
    setAuthentication(isAuth);
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
