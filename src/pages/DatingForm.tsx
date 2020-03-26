import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel,IonItem,IonInput, IonButton, IonBackButton, IonToast } from '@ionic/react';
import React, {useState} from 'react';
import { RouteComponentProps } from 'react-router';
import './Form.css';
import "@ionic/react/css/core.css"



let hombre: string = "";
let mujer: string = "";
let email: string = "";

class DatingSubmission {
  data: Array<string>;
  constructor() {
    this.data = [hombre, mujer, email]
  }
}

function handleSubmit() {
  let submission = new DatingSubmission();
  console.log(submission.data);
}

function handleHombre(event: any) {
  hombre = event.target.value;
}

function handleMujer(event: any) {
  mujer = event.target.value;
}

function handleEmail(event: any) {
  email = event.target.value;
}

//Form for Students declaring an official romantic relationship(Permiso de Parejas Oficiales)
const DatingForm: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {
  const [showToast, setShowToast] = useState(false);

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
          <IonInput class="IonInput" type="text" onInput={handleHombre} />
        </IonItem>

        <IonItem lines="none">
            <IonLabel class="padding" position="stacked">
              Nombre de Mujer
          </IonLabel>
          <IonInput class="IonInput" type="text" onInput={handleMujer} />
        </IonItem>

        <IonItem lines="none">
            <IonLabel class="padding" position="stacked">
              Email
          </IonLabel>
          <IonInput class="IonInput" type="email" onInput={handleEmail} />
        </IonItem>

        <IonItem lines="none"></IonItem>

        <IonButton class="IonButton" href="/home" expand="block" onClick={() => {handleSubmit(); setShowToast(true)}} type="submit">
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

export default DatingForm;
