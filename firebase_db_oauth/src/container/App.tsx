import React, { useState } from "react";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";

//todo: set authentication
const App: React.FC = () => {
  const [isAuthenticated, setAuthentication] = useState(false);

  const loginHandler = (isAuth: boolean) => {
    setAuthentication(isAuth);
  };
  const registerHandler = (isAuth: boolean) => {
    setAuthentication(isAuth);
  };

  //todo: Add Routing
  return (
    <div className="App">
      <h1>Hello World</h1>
      {/* <Register setAuth={registerHandler} /> */}
      <Login setAuth={loginHandler} />
    </div>
  );
};

export default App;
