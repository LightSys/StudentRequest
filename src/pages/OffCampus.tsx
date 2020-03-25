import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonRadioGroup, IonRadio, IonListHeader, IonTextarea } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import './Page.css';

const OffCampus: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Off Campus</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{match.params.name}</IonTitle>
            <IonTitle size="small"></IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonItem>
          <IonLabel position="stacked">Name</IonLabel>
          <IonInput type="text" />
        </IonItem>

        <IonRadioGroup value="hombre">
          <IonListHeader>
            <IonLabel>Gènero</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonLabel>Hombre</IonLabel>
            <IonRadio slot="start" value="hombre"></IonRadio>
          </IonItem>
          <IonItem>
            <IonLabel>Mujer</IonLabel>
            <IonRadio slot="start" value="mujer"></IonRadio>
          </IonItem>
        </IonRadioGroup>

        <IonItem>
          <IonLabel position="stacked">Email</IonLabel>
          <IonInput type="text" />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Reason</IonLabel>
          <IonTextarea />
        </IonItem>

      </IonContent>
    </IonPage>
  );
};

export default OffCampus;
