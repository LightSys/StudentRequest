import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonInput, IonItem, IonLabel, IonRadioGroup, IonRadio, IonListHeader, 
  IonTextarea, IonButton, IonBackButton, IonToast, IonDatetime } from '@ionic/react';
import React, {useState} from 'react';
import { RouteComponentProps } from 'react-router';
import './Form.css';

/*
  Inital data. hombre (man), mujer(female), and email are all set to an empty string. 
  Message is set dynamically depending on the toast that is being called.
  The year is set to act as a placeholder 
*/

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
let typeOfForm: string ="Permiso Dormir Fuera";


/* 
  small class to set the data. All data is saved into an array.
  Todo: Implement backend for server connection. 
  Give Each Array/Request item a unique ID
  Author: @njw32
          
*/
class OffCampusSubmission {
  data: Array<any>;
  constructor() {
    this.data = [nombre, gender, email, leaveTime, returnTime, location, reason, typeOfForm]
  }
}

/*
  OnClick handler to create a new off campus form after.
  The system will check to make sure all required fields
  are met, if not, the toast message is dynamically set 
  to meet requirements. Once met,
  all data is set to empty and a new DatingSubmission form is created.
  -- submission.data is the array of submitted information --
  Author: @njw32
          @OneTrueAsian
*/
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

/*
  All functions below are used to set data.
  The functions takes any event and data is set at target value
  Author: @njw32
*/
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

  // return a stateful value, and a function to update it.
  const [showToast, setShowToast] = useState(false);

  //Permission Form to Sleep Away From Campus(Dormir Fuera del Dormitorio)
  return (
    /*
      Translation: Permiso Para Dormir Fuera del Dormitorio -> Permision for sleeping outside the dormitory
                    Hombre -> Man
                    Mujer -> Female
                    Enviar -> Submit
                    Gènero -> Gender
                    Hora de Salida -> Departure Time
                    Hora de Regreso -> Return Time
                    ¿Dónde? -> Where?
                    Razon - >reason
    */
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle class="small-font" >Permiso Para Dormir Fuera del Dormitorio</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        
        {/* Form Inputs and Labels - Name, Gender Selection, Email */}
        <IonItem lines="none">
          <IonLabel class="padding" position="stacked">
            Nombre *
          </IonLabel>
          <IonInput class="IonInput" value={nombre} type="text" onInput={handleNombre} />
        </IonItem>

        {/*
          A radio group tag used to select if they are mail or female
        */}
        <IonRadioGroup value="hombre" onIonChange={e => handleGender(e.detail.value)}>
          <IonListHeader>
            <IonLabel class="padding" position="stacked">
              Gènero *
            </IonLabel>
          </IonListHeader>
          <IonItem lines="none">
            <IonLabel>Hombre </IonLabel>
            <IonRadio slot="start" value="hombre"></IonRadio>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Mujer </IonLabel>
            <IonRadio slot="start" value="mujer"></IonRadio>
          </IonItem>
        </IonRadioGroup>

        <IonItem lines="none">
          <IonLabel class="padding" position="stacked">Email</IonLabel>
          <IonInput class="IonInput" value={email} type="text" onInput={handleEmail} />
        </IonItem>

        {/*
          Tags for date time entry
        */}
        <IonItem lines="none">
          <IonLabel class="padding" position="stacked">Hora de Salida *</IonLabel>
          <IonDatetime displayFormat="MMM DD, YYYY HH:mm" min = {year.toString()} max= {endyear.toString()} value = {sampleTime} onIonChange={e => handleLeave(e.detail.value)}></IonDatetime>
        </IonItem>

        <IonItem lines="none">
          <IonLabel class="padding" position="stacked">Hora de Regreso *</IonLabel>
          <IonDatetime displayFormat="MMM DD, YYYY HH:mm" min = {year.toString()}  max= {endyear.toString()} value = {sampleTime} onIonChange={e => handleReturn(e.detail.value)}></IonDatetime>
        </IonItem>

        <IonItem lines="none">
          <IonLabel class="padding"position="stacked">¿Dónde? *</IonLabel>
          <IonInput class="IonInput" value={location} type="text" onInput={handleLocation} />
        </IonItem>

        <IonItem lines="none">
          <IonLabel class="padding"position="stacked">Razon *</IonLabel>
          <IonTextarea class="IonInput" value={reason} onInput={handleReason}/>
        </IonItem>

        <IonItem lines="none" />

        {/*
          Submit button, takes in an onClick handler to process handleSubmit() and setShowToast()
        */}
        <IonButton class="IonButton" expand="block" onClick={() => {handleSubmit(); setShowToast(true)}} type="submit">
          <IonLabel class="font-size">Enviar</IonLabel>
        </IonButton>

        {/*
          Toast to message user that their form was submitted or if they forgot a field entry.
          Author: @wrightjjw 
        */}
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
