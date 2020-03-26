import { IonItem, IonButtons, IonLabel, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTextarea, IonButton, IonInput,IonDatetime, IonBackButton, IonToast } from '@ionic/react';
import React, {useState} from 'react';
import { RouteComponentProps } from 'react-router';
import './Form.css';

let hombres: string = "";
let mujeres: string = "";
let email: string = "";
let leaveTime: string="";
let returnTime: string="";
let location: string = "";
let reason: string = "";

class GroupSubmission {
    data: Array<string>;
    constructor() {
        this.data = [hombres, mujeres, email,leaveTime, returnTime, location, reason]
    }
}

function handleSubmit(){
    let submission = new GroupSubmission();
    console.log(submission.data);
    hombres="";
    mujeres="";
    email="";
    location="";
    reason="";

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
                        Nombres de Hombres
                    </IonLabel>
                    <IonTextarea class="IonInput" placeholder="Nate Walter, Josh Wright, Joey Faas" value={hombres} onInput={handleHombres}></IonTextarea>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel class="padding" position="stacked">
                        Nombres de Mujeres
                </IonLabel>
                    <IonTextarea class="IonInput" placeholder="Natalie Walter, Jessica Wright, Josephina Faas" value={mujeres} onInput={handleMujeres}></IonTextarea>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel class="padding" position="stacked">
                        Email
                </IonLabel>
                    <IonInput class="IonInput" placeholder="email@riogrande.edu" value={email} onInput={handleEmail}></IonInput>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel class="padding" position="stacked">Date When Leave</IonLabel>
                        <IonDatetime displayFormat="MMM DD, YYYY HH:mm" min="2020" max="2022" value = "Mar 26, 2020 2:11" onIonChange={e => handleLeave(e.detail.value)}></IonDatetime>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel class="padding" position="stacked">Date When Back</IonLabel>
                        <IonDatetime displayFormat="MMM DD, YYYY HH:mm" min = "2020"  max="2022" value = "Mar 26, 2020 2:11" onIonChange={e => handleReturn(e.detail.value)}></IonDatetime>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel class="padding" position="stacked">
                        Donde?
                </IonLabel>
                    <IonInput class="IonInput" placeholder=" A donde van?" value={location} onInput={handleLocation}></IonInput>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel class="padding" position="stacked">
                        Reason
                </IonLabel>
                    <IonTextarea class="IonInput" placeholder="razon para salir" value={reason} onInput={handleReason}></IonTextarea>
                </IonItem>

                <IonItem lines="none"></IonItem>


                <IonButton class="IonButton" expand="block" onClick={() => {handleSubmit(); setShowToast(true)}} type = "submit">
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


export default GroupForm;
