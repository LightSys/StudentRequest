import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
  IonInput, IonItem, IonLabel, IonRadioGroup, IonRadio, IonListHeader, IonTextarea, IonButton } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import './Form.css';

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
          <IonLabel position="stacked"><h1>Name</h1></IonLabel>
          <IonInput type="text" />
        </IonItem>

        <IonRadioGroup value="hombre">
          <IonListHeader>
            <IonLabel position="stacked"><h1>Gènero</h1></IonLabel>
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
          <IonLabel position="stacked"><h1>Email</h1></IonLabel>
          <IonInput type="text" />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked"><h1>Location</h1></IonLabel>
          <IonInput type="text" />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked"><h1>Reason</h1></IonLabel>
          <IonTextarea />
        </IonItem>

        <IonButton expand="block">Submit</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default OffCampus;
