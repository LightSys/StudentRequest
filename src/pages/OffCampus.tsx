import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonInput, IonItem, IonLabel, IonRadioGroup, IonRadio, IonListHeader, IonTextarea, IonButton, IonBackButton, IonToast } from '@ionic/react';
import React, {useState} from 'react';
import { RouteComponentProps } from 'react-router';
import './Form.css';


//Permission Form to Sleep Away From Campus(Dormir Fuera del Dormitorio)
const OffCampus: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {
  const [showToast, setShowToast] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
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
        <IonItem lines="none">
          <IonLabel class="padding" position="stacked">
            Nombre
          </IonLabel>
          <IonInput class="IonInput" type="text" />
        </IonItem>

        <IonRadioGroup value="hombre">
          <IonListHeader>
            <IonLabel class="padding" position="stacked">
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

        <IonItem lines="none">
          <IonLabel class="padding"position="stacked">Email</IonLabel>
          <IonInput class="IonInput" type="text" />
        </IonItem>

        <IonItem lines="none">
          <IonLabel class="padding"position="stacked">Donde?</IonLabel>
          <IonInput class="IonInput" type="text" />
        </IonItem>

        <IonItem lines="none">
          <IonLabel class="padding"position="stacked">Razon</IonLabel>
          <IonTextarea class="IonInput" />
        </IonItem>

        <IonItem lines="none" />

        <IonButton class="IonButton" expand="block" href="/home" onClick={() => {setShowToast(true)}}>
          <IonLabel class="font-size">Enviar</IonLabel>
        </IonButton>
        <IonToast
        message="Form submitted!"
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        duration={2000}
        />

      </IonContent>
    </IonPage>
  );
};

export default OffCampus;
