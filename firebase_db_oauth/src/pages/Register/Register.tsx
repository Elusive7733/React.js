import React, { Fragment, useState } from "react";

import { Button, TextField } from "@mui/material";
import "./Register.css";

import { getDatabase, ref, set, push } from "firebase/database";
import firebaseApp from "../../firebase";

const Register = (props: any) => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>();

  const registerHandler = () => {
    if (confirmPassword === password) {
      const db = getDatabase(firebaseApp);
      const userListRef = ref(db, "Users");
      const newUserRef = push(userListRef);

      set(newUserRef, {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
      });
      console.log("Registered my nigga");
      props.setAuth(true);
    } else {
      setError(true);
      setErrorMsg("Password and Confirm Password do not match.");
    }
  };

  return (
    <Fragment>
      <div className="container">
        <h2>Enter Your Information</h2>
        <TextField
          fullWidth
          variant="outlined"
          label="Full Name"
          type="text"
          color="primary"
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Email"
          type="email"
          color="primary"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          fullWidth
          variant="outlined"
          label="Phone Number"
          type="tel"
          color="primary"
          margin="normal"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <TextField
          fullWidth
          variant="outlined"
          label="Password"
          type="password"
          color="primary"
          margin="normal"
          error={error}
          helperText={errorMsg}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Confirm Password"
          type="password"
          color="primary"
          margin="normal"
          error={error}
          helperText={errorMsg}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          variant="contained"
          className="registerButton"
          onClick={registerHandler}
        >
          Register
        </Button>
      </div>
    </Fragment>
  );
};

export default Register;
