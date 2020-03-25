import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonLabel,IonItem,IonInput, IonButton } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import './Form.css';

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
          <IonLabel class="padding" position="stacked" >
              Nombre de Hombre
          </IonLabel>
          <IonInput class="IonInput" type="text" />
        </IonItem>

        <IonItem>
            <IonLabel class="padding" position="stacked">
              Nombre de Mujer
            </IonLabel>
          <IonInput class="IonInput" type="text" />
        </IonItem>

        <IonItem>
            <IonLabel class="padding" position="stacked">
              Email
            </IonLabel>
          <IonInput class="IonInput" type="text" />
        </IonItem>

        <IonItem></IonItem>

        <IonButton class="IonButton" expand="block">
          <IonLabel class="font-size">Enviar</IonLabel>
        </IonButton>
        

      </IonContent>
    </IonPage>
  );
};

export default DatingForm;
