import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonInput, IonItem, IonLabel, IonRadioGroup, IonRadio, IonListHeader, IonTextarea, IonButton, IonBackButton, IonToast, IonDatetime } from '@ionic/react';
import React, {useState} from 'react';
import { RouteComponentProps } from 'react-router';
import './Form.css';

let today = new Date();
let year = today.getFullYear();
let sampleTime = "Jan 1, " + year.toString() + " 12:00"; 
let endyear = year + 1;


let nombre: string ="";
let gender: string ="hombre";
let email: string ="";
let location: string ="";
let reason: string ="";
let leaveTime: string= sampleTime;  
let returnTime: string= sampleTime;
let message: string = "";



class OffCampusSubmission {
  data: Array<any>;
  constructor() {
    this.data = [nombre, gender, email, leaveTime, returnTime, location, reason]
  }
}

function handleSubmit() {
  if (nombre ==="" || email ==="" ||
      location ==="" || reason ==="" || leaveTime === sampleTime ||
      returnTime === sampleTime){
      message = "Fill All Required Fields" 
  } else {
    let submission = new OffCampusSubmission();
    console.log(submission.data);
    nombre="";
    gender="hombre";
    email="";
    location="";
    reason="";
    message="Form Submitted";
  }

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
function handleLeave(event: any) {
  leaveTime = event;
}
function handleReturn(event: any) {
  returnTime = event;
}
function handleLocation(event: any) {
  location = event.target.value;
}
function handleReason(event: any) {
  reason = event.target.value;
}

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
          <IonInput class="IonInput" value={nombre} type="text" onInput={handleNombre} />
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
          <IonLabel class="padding" position="stacked">Email</IonLabel>
          <IonInput class="IonInput" value={email} type="text" onInput={handleEmail} />
        </IonItem>

        <IonItem lines="none">
          <IonLabel class="padding" position="stacked">Date When Leave</IonLabel>
          <IonDatetime displayFormat="MMM DD, YYYY HH:mm" min = {year.toString()} max= {endyear.toString()} value = {sampleTime} onIonChange={e => handleLeave(e.detail.value)}></IonDatetime>
        </IonItem>

        <IonItem lines="none">
          <IonLabel class="padding" position="stacked">Date When Back</IonLabel>
          <IonDatetime displayFormat="MMM DD, YYYY HH:mm" min = {year.toString()}  max= {endyear.toString()} value = {sampleTime} onIonChange={e => handleReturn(e.detail.value)}></IonDatetime>
        </IonItem>

        <IonItem lines="none">
          <IonLabel class="padding"position="stacked">Donde?</IonLabel>
          <IonInput class="IonInput" value={location} type="text" onInput={handleLocation} />
        </IonItem>

        <IonItem lines="none">
          <IonLabel class="padding"position="stacked">Razon</IonLabel>
          <IonTextarea class="IonInput" value={reason} onInput={handleReason}/>
        </IonItem>

        <IonItem lines="none" />

        <IonButton class="IonButton" expand="block" onClick={() => {handleSubmit(); setShowToast(true)}} type="submit">
          <IonLabel class="font-size">Enviar</IonLabel>
        </IonButton>
        <IonToast
        message={message}
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        duration={2000}
        />

      </IonContent>
    </IonPage>
  );
};

export default OffCampus;
