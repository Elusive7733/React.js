import { Button, TextField } from "@mui/material";
import React, { Fragment, useState } from "react";

const Login = (props: any) => {
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>();

  const loginHandler = () => {
    console.log("Logged in my nigga");

    props.setAuth(true);
  };

  return (
    <Fragment>
      <TextField
        fullWidth
        variant="outlined"
        label="Phone Number"
        type="tel"
        color="warning"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <TextField
        fullWidth
        variant="outlined"
        label="Password"
        type="password"
        color="warning"
        error={error}
        helperText={errorMsg}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        className="loginButton"
        onClick={loginHandler}
      >
        Register
      </Button>
    </Fragment>
  );
};

export default Login;
