import { Button, TextField } from "@mui/material";
import React, { Fragment, useState } from "react";
import "./Login.css";

const Login = (props: any) => {
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>();

  const loginHandler = () => {
    console.log("Logged in my nigga");

    props.setAuth(true);
  };

  //todo: Fix Styling
  return (
    <Fragment>
      <div className="container">
        <TextField
          fullWidth
          variant="outlined"
          label="Phone Number"
          type="tel"
          margin="normal"
          color="success"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <TextField
          fullWidth
          variant="outlined"
          label="Password"
          type="password"
          color="success"
          error={error}
          margin="normal"
          helperText={errorMsg}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          className="loginButton"
          onClick={loginHandler}
          size="medium"
          color="success"
        >
          Login
        </Button>
      </div>
    </Fragment>
  );
};

export default Login;
