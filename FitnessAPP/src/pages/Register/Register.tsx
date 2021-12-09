import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
} from "@ionic/react";
import React, { useState } from "react";
import styles from "./Register.module.css";

import { getDatabase, ref, set, push } from "firebase/database";
import app from "../../firebase";
import { TextField } from "@mui/material";

const Register = (props: any) => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>();

  const registerHandler = () => {
    // console.log(name);
    // console.log(email);
    // console.log(phoneNumber);
    // console.log(password);

    if (confirmPassword === password) {
      const db = getDatabase(app);
      const userListRef = ref(db, "Users");
      const newUserRef = push(userListRef);

      set(newUserRef, {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
      });

      // set(ref(db, "Users/" + 2), {
      //   name: name,
      //   email: email,
      //   phoneNumber: phoneNumber,
      //   password: password,
      // });

      console.log("Registered my nigga");
      props.setAuth(true);
    } else {
      setError(true);
      setErrorMsg("Password and Confirm Password do not match.");
    }
  };

  function setNumber(value: any) {
    setPhoneNumber(value);
  }

  return (
    <IonPage>
      <TextField
        fullWidth
        variant="outlined"
        label="Full Name"
        type="text"
        color="warning"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Email"
        type="email"
        color="warning"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

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
      <TextField
        fullWidth
        variant="outlined"
        label="Confirm Password"
        type="password"
        color="warning"
        error={error}
        helperText={errorMsg}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <IonButton
        className={styles["IonButton"]}
        expand="block"
        color="dark"
        onClick={registerHandler}
      >
        Register
      </IonButton>
    </IonPage>
  );
};

export default Register;
