import { IonItem, IonButtons, IonLabel, IonContent, 
    IonHeader, IonPage, IonTitle, IonToolbar, IonTextarea,
    IonButton, IonInput,IonDatetime, IonBackButton, 
    IonToast } from '@ionic/react';
import React, {useState} from 'react';
import { RouteComponentProps } from 'react-router';
import './Form.css';

/*
  Inital data. All set to an empty string. 
  Message is set dynamically depending on the toast that is being called.
*/
let today = new Date();
let year = today.getFullYear();
let sampleTime = "Jan 1, " + year.toString() + " 12:00"; 
let endyear = year + 1;

/* 
  small class to set the data. All data is saved into an array.
  Todo: Implement backend for server connection. 
        Give Each Array/Request item a unique ID
  Author: @njw32
          
*/
let hombres: string = "";
let mujeres: string = "";
let email: string = "";
let leaveTime: string = sampleTime;
let returnTime: string = sampleTime;
let location: string = "";
let reason: string = "";
let message: string = "";
let typeOfForm: string = "Permiso Mixto"

class GroupSubmission {
    data: Array<string>;
    constructor() {
        this.data = [hombres, mujeres, email,leaveTime, returnTime, location, reason, typeOfForm]
    }
}

/*
  OnClick handler to create a new Outing form after.
  The system will check to make sure all required fields
  are met, if not, the toast message is dynamically set 
  to meet requirements. Once met,
  all data is set to empty and a new DatingSubmission form is created.
  -- submission.data is the array of submitted information --
  Author: @njw32
          @OneTrueAsian
*/
function handleSubmit(){
    if(hombres==="" || mujeres==="" || email==="" ||
        location==="" || reason ==="" || 
        leaveTime===sampleTime || returnTime===sampleTime){
        message= "Fill All Required Fields"
    } else {
        let submission = new GroupSubmission();
        console.log(submission.data);
        hombres="";
        mujeres="";
        email="";
        location="";
        reason="";
        message="Form Submitted"
    }


}

/*
  All functions below are used to set data.
  The functions takes any event and data is set at target value
  Author: @njw32
*/
function handleHombres(event:any){
    hombres = event.target.value;
}
function handleMujeres(event:any){
    mujeres = event.target.value;
}
function handleEmail(event:any){
    email = event.target.value;
}
function handleLeave(event: any) {
    leaveTime = event;
  }
function handleReturn(event: any) {
    returnTime = event; 
  }
function handleLocation(event:any){
    location = event.target.value;
}
function handleReason(event:any){
    reason = event.target.value;
}


//Permission Form for Mixed Groups (Permiso Mixto) 
const GroupForm: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {

    // return a stateful value, and a function to update it.
    const [showToast, setShowToast] = useState(false);

    // Permission form to go out as a group
    return (
        /*
      Translation: Permiso Para Dormir Fuera del Dormitorio -> Permision for sleeping outside the dormitory
                    Hombre de Hombre -> Name of Guys
                    Mujer de Nombre -> Name of Female
                    Enviar -> Submit
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
                    <IonTitle>Permiso Mixto</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{match.params.name}</IonTitle>
                        <IonTitle size="small"></IonTitle>
                    </IonToolbar>
                </IonHeader>

                {/* Form Inputs and Labels - List of Men, Women, Email, and then Reason */}
                <IonItem lines="none">
                    <IonLabel class="padding" position="stacked">
                        Nombres de Hombres *
                    </IonLabel>
                    <IonTextarea class="IonInput"  value={hombres} onInput={handleHombres}></IonTextarea>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel class="padding" position="stacked">
                        Nombres de Mujeres *
                </IonLabel>
                    <IonTextarea class="IonInput" value={mujeres} onInput={handleMujeres}></IonTextarea>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel class="padding" position="stacked">
                        Email *
                </IonLabel>
                    <IonInput class="IonInput" value={email} onInput={handleEmail}></IonInput>
                </IonItem>

                {/*
                Tags for date time entry
                */}
                <IonItem lines="none">
                    <IonLabel class="padding" position="stacked">Hora de Salida *</IonLabel>
                        <IonDatetime displayFormat="MMM DD, YYYY HH:mm" min = {year.toString()} max = {endyear.toString()} value = {sampleTime} onIonChange={e => handleLeave(e.detail.value)}></IonDatetime>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel class="padding" position="stacked">Hora de Regreso *</IonLabel>
                        <IonDatetime displayFormat="MMM DD, YYYY HH:mm" min = {year.toString()}  max= {endyear.toString()} value = {sampleTime} onIonChange={e => handleReturn(e.detail.value)}></IonDatetime>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel class="padding" position="stacked">
                        ¿Dónde? *
                </IonLabel>
                    <IonInput class="IonInput" value={location} onInput={handleLocation}></IonInput>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel class="padding" position="stacked">
                        Razon *
                </IonLabel>
                    <IonTextarea class="IonInput" value={reason} onInput={handleReason}></IonTextarea>
                </IonItem>

                <IonItem lines="none"></IonItem>
                
                {/*
                Submit button, takes in an onClick handler to process handleSubmit() and setShowToast()
                */} 
                <IonButton class="IonButton" expand="block" onClick={() => {handleSubmit(); setShowToast(true)}} type = "submit">
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


export default GroupForm;
