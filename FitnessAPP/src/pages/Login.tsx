import { IonButton, IonPage } from "@ionic/react";
import React from "react";

const Login = (props: any) => {
  const loginHandler = () => {
    console.log("Logged in my nigga");

    props.setAuth(true);
  };

  return (
    <IonPage>
      Login {props.text}
      <IonButton expand="block" color="dark" onClick={loginHandler}>
        Login
      </IonButton>
    </IonPage>
  );
};

export default Login;
