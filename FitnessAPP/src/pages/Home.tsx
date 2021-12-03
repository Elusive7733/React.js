import { IonPage } from "@ionic/react";

const Home: React.FC = () => {
  // const [selectedPath, setPath] = useState<"/login" | "/register">();

  // const PathSelectHandler = (path: "/login" | "/register") => {
  //   console.log(path);
  //   setPath(path);
  // };

  return <IonPage>Home</IonPage>;
};

export default Home;

// <IonHeader>
//   <IonToolbar>
//     <IonTitle>Fine Fitness</IonTitle>
//   </IonToolbar>
// </IonHeader>
// <IonContent fullscreen>
//   <IonGrid>
//     <IonRow>
//       <IonCol>
//         <IonButton
//           expand="block"
//           color="dark"
//           onClick={(path) => PathSelectHandler("/login")}
//           routerLink="/login"
//         >
//           Login
//         </IonButton>
//       </IonCol>
//     </IonRow>
//     <IonRow>
//       <IonCol>
//         <IonButton
//           expand="block"
//           color="medium"
//           onClick={(path) => PathSelectHandler("/register")}
//           routerLink="/register"
//         >
//           Register
//         </IonButton>
//       </IonCol>
//     </IonRow>
//   </IonGrid>
// </IonContent>
