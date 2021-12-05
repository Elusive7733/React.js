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

const Register = (props: any) => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<number>();

  const registerHandler = () => {
    console.log("Registered my nigga");

    props.setAuth(true);
  };

  function setNumber(value: any) {
    setPhoneNumber(value);
  }

  return (
    <IonPage>
      <IonContent className={styles["IonContent"]}>
        <IonTitle className={styles["IonTitle"]}>Create New Account</IonTitle>
        <IonItem className={styles["IonItem"]}>
          <IonLabel position="floating">Full Name</IonLabel>
          <IonInput type="text" value={name}></IonInput>
        </IonItem>
        <IonItem className={styles["IonItem"]}>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput type="email" value={email}></IonInput>
        </IonItem>
        <IonItem className={styles["IonItem"]}>
          <IonLabel position="floating">Phone Number</IonLabel>
          <IonInput type="tel" value={phoneNumber}></IonInput>
        </IonItem>
        <IonItem className={styles["IonItem"]}>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput type="password" value={password}></IonInput>
        </IonItem>
        <IonItem className={styles["IonItem"]}>
          <IonLabel position="floating">Confirm Password</IonLabel>
          <IonInput type="password" value={confirmPassword}></IonInput>
        </IonItem>
        <IonButton
          className={styles["IonButton"]}
          expand="block"
          color="dark"
          onClick={registerHandler}
        >
          Register
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Register;
