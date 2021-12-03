import {
  IonApp,
  IonContent,
  IonHeader,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
const App: React.FC = () => {
  const [isAuthenticated, setAuthentication] = useState(false);

  return (
    <IonApp>
      <IonReactRouter>
        <IonHeader>
          <IonTitle>Fine Fitness</IonTitle>
        </IonHeader>
        <IonContent>
          {!isAuthenticated ? (
            <IonTabs>
              <IonRouterOutlet>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                <IonTabButton tab="login" href="/login">
                  <IonLabel>Login</IonLabel>
                </IonTabButton>
                <IonTabButton tab="register" href="/register">
                  <IonLabel>Register</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          ) : (
            <Home />
          )}
        </IonContent>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
