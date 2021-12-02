import { IonButton, IonPage, IonRouterOutlet } from "@ionic/react";

const Signup: React.FC = () => {
  return (
    <IonPage>
      <IonRouterOutlet>
        {/* <Route exact path="/home" component={UsersListPage} />
        <Route path="/login" component={Login} /> */}
        <IonButton>Signup</IonButton>
      </IonRouterOutlet>
    </IonPage>
  );
};

export default Signup;
