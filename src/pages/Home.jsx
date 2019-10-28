import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonInput,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonButton,
  onIonChange
} from "@ionic/react";
import { logIn } from "ionicons/icons";

const Home = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    console.log(email, password);

    if (email !== "" && password !== "") {
      history.push("/new");
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Halkhata</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: "10rem 0rem"
            }}
            class="align-items-center"
          >
            <IonCol size="10">
              <IonInput
                name="email"
                type="email"
                value={email}
                placeholder="Enter Email"
                onIonChange={e => setEmail(e.target.value)}
              />
            </IonCol>
            <IonCol size="10">
              <IonInput
                name="password"
                type="password"
                value={password}
                placeholder="Enter Password"
                onIonChange={e => setPassword(e.target.value)}
              />
            </IonCol>
            <IonCol size="10">
              <IonButton expand="full" onClick={onSubmit}>
                Login
                <IonIcon style={{ marginLeft: "20px" }} icon={logIn} />
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
