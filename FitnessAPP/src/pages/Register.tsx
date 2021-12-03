import { IonButton, IonPage } from "@ionic/react";
import React from "react";

const Register = (props: any) => {
  const registerHandler = () => {
    console.log("Registered my nigga");

    props.setAuth(true);
  };

  return (
    <IonPage>
      Register {props.text}
      <IonButton expand="block" color="dark" onClick={registerHandler}>
        Register
      </IonButton>
    </IonPage>
  );
};

export default Register;
