import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonLabel,IonItem,IonInput, IonButton, IonBackButton } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import './Form.css';
import "@ionic/react/css/core.css"

//Form for Students declaring an official romantic relationship(Permiso de Parejas Oficiales)
const DatingForm: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
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

        <IonItem lines="none">
          <IonLabel class="padding" position="stacked" >
              Nombre de Hombre
          </IonLabel>
          <IonInput class="IonInput" type="text" />
        </IonItem>

        <IonItem lines="none">
            <IonLabel class="padding" position="stacked">
              Nombre de Mujer
          </IonLabel>
          <IonInput class="IonInput" type="text" />
        </IonItem>

        <IonItem lines="none">
            <IonLabel class="padding" position="stacked">
              Email
          </IonLabel>
          <IonInput class="IonInput" type="text" />
        </IonItem>

        <IonItem lines="none"></IonItem>

        <IonButton class="IonButton" expand="block">
          <IonLabel class="font-size">Enviar</IonLabel>
        </IonButton>
        

      </IonContent>
    </IonPage>
  );
};

export default DatingForm;
