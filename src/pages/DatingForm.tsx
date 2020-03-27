import { IonButtons, IonContent, IonHeader, IonPage, 
  IonTitle, IonToolbar, IonLabel,IonItem,IonInput, 
  IonButton, IonBackButton, IonToast } from '@ionic/react';
import React, {useState} from 'react';
import { RouteComponentProps} from 'react-router';
import './Form.css';
import "@ionic/react/css/core.css"

/*
  Inital data. hombre (man), mujer(female), and email are all set to an empty string. 
  Message is set dynamically depending on the toast that is being called.
*/

let hombre: string = "";
let mujer: string = "";
let email: string = "";
let message: string = "";
let typeOfForm: string ="Permiso Parejas Oficiales"

/* 
  small class to set the data. All data is saved into an array.
  Todo: Implement backend for server connection. 
  Give Each Array/Request item a unique ID
  Author: @wrightjjw 
          @OneTrueAsian
*/
class DatingSubmission {
  data: Array<string>;
  constructor() {
    this.data = [hombre, mujer, email, typeOfForm]
  }
}

/*
  OnClick handler to create a new dating form after.
  The system will check to make sure all required fields
  are met, if not, the toast message is dynamically set 
  to meet requirements. Once met,
  all data is set to empty and a new DatingSubmission form is created.
  -- submission.data is the array of submitted information --
  Author: @wrightjjw 
          @OneTrueAsian
*/
function handleSubmit() {
  if(hombre==="" || mujer==="" || email === ""){
    message = "Fill All Required Fields"     
  } else {
    
    let submission = new DatingSubmission();
    console.log(submission.data);
    hombre="";
    mujer="";
    email="";
    message = "Form Submitted"
  }
  
}

/*
  All functions below are used to set data.
  The functions takes any event and data is set at target value
  Author: @wrightjjw 
          @OneTrueAsian
*/
function handleHombre(event: any) {
  hombre = event.target.value;
}

function handleMujer(event: any) {
  mujer = event.target.value;
}

function handleEmail(event: any) {
  email = event.target.value;
}


const DatingForm: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {

  // return a stateful value, and a function to update it.
  const [showToast, setShowToast] = useState(false);

  //Form for Students declaring an official romantic relationship(Permiso de Parejas Oficiales)
  return (
    /*
      Translation: Permiso Para Dormir Fuera del Dormitorio -> Permision for sleeping outside the dormitory
                    Hombre de Hombre -> Name of Guys
                    Mujer de Nombre -> Name of Female
                    Enviar -> Submit
    */
    <IonPage>

      {/*
        A tool bar embded with a back button to take user back to the home page.
      */}
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

      {/*
        Below are the html for the entry boxes for all data.
        All the styles are located in the form css file.
        The values are set to the corresponding data
      */}
        <IonItem lines="none">
          <IonLabel class="padding" position="stacked" >
              Nombre de Hombre *
          </IonLabel>
          <IonInput class="IonInput" type="text" value={hombre} onInput={handleHombre} />
        </IonItem>

        <IonItem lines="none">
            <IonLabel class="padding" position="stacked">
              Nombre de Mujer *
          </IonLabel>
          <IonInput class="IonInput" type="text" value={mujer} onInput={handleMujer} />
        </IonItem>

        <IonItem lines="none">
            <IonLabel class="padding" position="stacked">
              Email *
          </IonLabel>
          <IonInput class="IonInput" type="email" value={email} onInput={handleEmail} />
        </IonItem>

        <IonItem lines="none"></IonItem>

        {/*
          Submit button, takes in an onClick handler to process handleSubmit() and setShowToast()
        */}
        <IonButton class="IonButton" expand="block" onClick={() => {handleSubmit(); setShowToast(true) }} type="submit">
          <IonLabel class="font-size">Enviar</IonLabel>
        </IonButton>
        
        {/*
          Toast to message user that their form was submitted or if they forgot a field entry.
        */}
        <IonToast
          message= {message}
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          duration={2000}
          />

      </IonContent>
    </IonPage>
  );
};

export default DatingForm;
