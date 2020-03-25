import { IonButtons, IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import './Form.css';



const Page: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{match.params.name} title</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{ match.params.name }</IonTitle>
            <IonTitle size="small"></IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>{match.params.name}</h1>
        <IonContent>
          <IonButton color="warning" href="/GroupForm">GroupForm</IonButton>
          <IonButton color="warning" href="/offcampus">Night</IonButton>
          <IonButton color="warning" href="/DatingForm">Parejas</IonButton>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};


export default Page;
