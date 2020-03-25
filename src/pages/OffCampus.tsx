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

        <IonItem lines="none">
          <IonLabel class="padding"position="stacked"><h1>Name</h1></IonLabel>
          <IonInput class="IonInput" type="text" />
        </IonItem>

        <IonRadioGroup value="hombre">
          <IonListHeader>
            <IonLabel class="padding"position="stacked"><h1>Gènero</h1></IonLabel>
          </IonListHeader>
          <IonItem lines="none">
            <IonLabel>Hombre</IonLabel>
            <IonRadio slot="start" value="hombre"></IonRadio>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Mujer</IonLabel>
            <IonRadio slot="start" value="mujer"></IonRadio>
          </IonItem>
        </IonRadioGroup>

        <IonItem lines="none">
          <IonLabel class="padding"position="stacked"><h1>Email</h1></IonLabel>
          <IonInput class="IonInput" type="text" />
        </IonItem>

        <IonItem lines="none">
          <IonLabel class="padding"position="stacked"><h1>Location</h1></IonLabel>
          <IonInput class="IonInput" type="text" />
        </IonItem>

        <IonItem lines="none">
          <IonLabel class="padding"position="stacked"><h1>Reason</h1></IonLabel>
          <IonTextarea class="IonInput" />
        </IonItem>

        <IonItem lines="none" />

        <IonButton expand="block">Submit</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default OffCampus;
