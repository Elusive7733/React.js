import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";

const Register = (props: any) => {
  const [text, setText] = useState<string>();
  const [phoneNumber, setNumber] = useState<number>();

  const registerHandler = () => {
    console.log("Registered my nigga");

    props.setAuth(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Create your Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Phone Number</IonLabel>
            <IonInput type="number" value={phoneNumber}></IonInput>
          </IonItem>
        </IonList>
      </IonContent>
      <IonButton expand="block" color="dark" onClick={registerHandler}>
        Register
      </IonButton>
    </IonPage>
  );
};

export default Register;
