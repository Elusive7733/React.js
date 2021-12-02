import { IonButton, IonPage, IonRouterOutlet } from "@ionic/react";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonRouterOutlet>
        {/* <Route exact path="/home" component={UsersListPage} />
        <Route path="/login" component={Login} /> */}
        <IonButton>Login</IonButton>
      </IonRouterOutlet>
    </IonPage>
  );
};

export default Login;
