import { IonButton, IonPage, IonRouterOutlet } from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import { useState } from "react";
import "./Home.css";

const Home: React.FC = () => {
  const [selectedPath, setSelectedPath] = useState<string>();

  const PathSelectHandler = (path: "login" | "signup") => {
    // console.log(path);
    setSelectedPath(path);
  };

  return (
    <IonPage>
      <IonRouterOutlet>
        {/* <Route exact path="/home" component={UsersListPage} />
        <Route path="/login" component={Login} /> */}
        <IonButton onClick={(path) => PathSelectHandler("login")}>
          login
        </IonButton>
        <IonButton onClick={(path) => PathSelectHandler("signup")}>
          signupa
        </IonButton>
      </IonRouterOutlet>
    </IonPage>
  );
};

export default Home;
