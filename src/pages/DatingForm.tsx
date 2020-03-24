import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonLabel,IonItem,IonInput, IonButton } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import './Page.css';

const DatingForm: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Permiso de Parejas Oficiales</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{ match.params.name }</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonItem>
          <IonLabel position="stacked">
              <big>Nombre de Hombre</big>
          </IonLabel>
          <IonInput type="text" />
        </IonItem>

        <IonItem>
            <IonLabel position="stacked">
              <big>Nombre de Mujer</big>
            </IonLabel>
          <IonInput type="text" />
        </IonItem>

        <IonItem>
            <IonLabel position="stacked">
              <big>Email</big>
            </IonLabel>
          <IonInput type="text" />
        </IonItem>

        <IonButton color="success">Enviar</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default DatingForm;
