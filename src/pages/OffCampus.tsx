import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonInput, IonItem, IonLabel, IonRadioGroup, IonRadio, IonListHeader, IonTextarea, IonButton, IonBackButton } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import './Form.css';

let nombre: string ="";
let gender: string ="hombre";
let email: string ="";
let location: string ="";
let reason: string ="";

class OffCampusSubmission {
  data: Array<any>;
  constructor() {
    this.data = [nombre, gender, email, location, reason]
  }
}

function handleSubmit() {
  let submission = new OffCampusSubmission();
  console.log(submission.data);
}
function handleNombre(event: any) {
  nombre = event.target.value;
}
function handleGender(event: any){
  gender = event;
}
function handleEmail(event: any) {
  email = event.target.value;
}
function handleLocation(event: any) {
  location = event.target.value;
}
function handleReason(event: any) {
  reason = event.target.value;
}

//Permission Form to Sleep Away From Campus(Dormir Fuera del Dormitorio)
const OffCampus: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {
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
          <IonInput class="IonInput" type="text" onInput={handleNombre} />
        </IonItem>

        <IonRadioGroup value="hombre" onIonChange={e => handleGender(e.detail.value)}>
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
          <IonInput class="IonInput" type="text" onInput={handleEmail} />
        </IonItem>

        <IonItem lines="none">
          <IonLabel class="padding"position="stacked">Donde?</IonLabel>
          <IonInput class="IonInput" type="text" onInput={handleLocation} />
        </IonItem>

        <IonItem lines="none">
          <IonLabel class="padding"position="stacked">Razon</IonLabel>
          <IonTextarea class="IonInput" onInput={handleReason}/>
        </IonItem>

        <IonItem lines="none" />

        <IonButton class="IonButton" expand="block" onClick={() => handleSubmit()} type="submit">
          <IonLabel class="font-size">Enviar</IonLabel>
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default OffCampus;
