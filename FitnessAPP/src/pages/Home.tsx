import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRouterOutlet,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { Route } from "workbox-routing";
import { Redirect } from "react-router";

const Home: React.FC = () => {
  const [selectedPath, setPath] = useState<"/login" | "/register">();

  const PathSelectHandler = (path: "/login" | "/register") => {
    console.log(path);
    setPath(path);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Fine Fitness</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton
                expand="block"
                color="dark"
                onClick={(path) => PathSelectHandler("/login")}
              >
                Login
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
                expand="block"
                color="medium"
                onClick={(path) => PathSelectHandler("/register")}
              >
                Register
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
