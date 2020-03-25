import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
  IonInput, IonItem, IonLabel, IonRadioGroup, IonRadio, IonListHeader, IonTextarea, IonButton } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import './Form.css';


//Permission Form to Sleep Away From Campus(Dormir Fuera del Dormitorio)
const OffCampus: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Permiso Para Dormir Fuera del Dormitorio</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{match.params.name}</IonTitle>
            <IonTitle size="small"></IonTitle>
          </IonToolbar>
        </IonHeader>
        
{/* Form Inputs and Labels - Name, Gender Selection, Email */}
        <IonItem>
          <IonLabel position="stacked">
            Nombre
          </IonLabel>
          <IonInput type="text" />
        </IonItem>

        <IonRadioGroup value="hombre">
          <IonListHeader>
            <IonLabel position="stacked">
              Gènero
            </IonLabel>
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

        <IonItem>
          <IonLabel position="stacked">Email</IonLabel>
          <IonInput type="text" />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Donde?</IonLabel>
          <IonInput type="text" />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Razon</IonLabel>
          <IonTextarea />
        </IonItem>

        <IonItem lines="none" />

        <IonButton expand="block">Submit</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default OffCampus;
