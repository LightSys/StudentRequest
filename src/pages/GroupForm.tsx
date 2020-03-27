import { IonItem, IonButtons, IonLabel, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTextarea, IonButton, IonInput,IonDatetime, IonBackButton, IonToast } from '@ionic/react';
import React, {useState} from 'react';
import { RouteComponentProps } from 'react-router';
import './Form.css';


let today = new Date();
let year = today.getFullYear();
let sampleTime = "Jan 1, " + year.toString() + " 12:00"; 
let endyear = year + 1;

let hombres: string = "";
let mujeres: string = "";
let email: string = "";
let leaveTime: string = sampleTime;
let returnTime: string = sampleTime;
let location: string = "";
let reason: string = "";
let message: string = "";

class GroupSubmission {
    data: Array<string>;
    constructor() {
        this.data = [hombres, mujeres, email,leaveTime, returnTime, location, reason]
    }
}

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
    const [showToast, setShowToast] = useState(false);
    return (
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
                    <IonTextarea class="IonInput" placeholder="Nate Walter, Josh Wright, Joey Faas" value={hombres} onInput={handleHombres}></IonTextarea>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel class="padding" position="stacked">
                        Nombres de Mujeres *
                </IonLabel>
                    <IonTextarea class="IonInput" placeholder="Natalie Walter, Jessica Wright, Josephina Faas" value={mujeres} onInput={handleMujeres}></IonTextarea>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel class="padding" position="stacked">
                        Email *
                </IonLabel>
                    <IonInput class="IonInput" placeholder="email@riogrande.edu" value={email} onInput={handleEmail}></IonInput>
                </IonItem>

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
                    <IonInput class="IonInput" placeholder=" A donde van?" value={location} onInput={handleLocation}></IonInput>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel class="padding" position="stacked">
                        Razon *
                </IonLabel>
                    <IonTextarea class="IonInput" placeholder="razon para salir" value={reason} onInput={handleReason}></IonTextarea>
                </IonItem>

                <IonItem lines="none"></IonItem>


                <IonButton class="IonButton" expand="block" onClick={() => {handleSubmit(); setShowToast(true)}} type = "submit">
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


export default GroupForm;
