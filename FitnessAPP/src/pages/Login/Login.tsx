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
import styles from "./Login.module.css";

const Login = (props: any) => {
  const [phoneNumber, setPhoneNumber] = useState<number>();
  const [password, setPassword] = useState<string>();

  const loginHandler = () => {
    console.log("Logged in my nigga");

    props.setAuth(true);
  };

  return (
    <IonPage>
      <IonContent className={styles["IonContent"]}>
        <IonTitle className={styles["IonTitle"]}>Login</IonTitle>
        <IonItem className={styles["IonItem"]}>
          <IonLabel position="floating">Phone Number</IonLabel>
          <IonInput type="tel" value={phoneNumber}></IonInput>
        </IonItem>
        <IonItem className={styles["IonItem"]}>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput type="password" value={password}></IonInput>
        </IonItem>
        <IonButton
          className={styles["IonButton"]}
          expand="block"
          color="dark"
          onClick={loginHandler}
        >
          Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
