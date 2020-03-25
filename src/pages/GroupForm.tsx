import { IonItem,IonButtons,IonLabel, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTextarea, IonButton, IonMenuButton, IonInput } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import './Form.css';



const GroupForm: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Permiso Mixto</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent>
            <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">{ match.params.name }</IonTitle>
                    <IonTitle size="small"></IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonItem lines="none">
                <IonLabel class = "padding" position="stacked">Nombres de Hombres</IonLabel>
                <IonTextarea class="IonInput" placeholder="Nate Walter, Josh Wright, Joey Faas"></IonTextarea>
            </IonItem>

            <IonItem lines="none">
                <IonLabel class = "padding" position="stacked">Nombres de Mujeres</IonLabel>
                <IonTextarea class="IonInput" placeholder="Natalie Walter, Jessica Wright, Josephina Faas"></IonTextarea>
            </IonItem>

            <IonItem lines="none">
                <IonLabel class = "padding" position= "stacked">Email de Jefe</IonLabel>
                <IonInput class="IonInput" placeholder = "email@riogrande.edu"></IonInput>
            </IonItem>

            <IonItem lines="none">
                <IonLabel class = "padding" position="stacked">Reason</IonLabel>
                <IonTextarea class="IonInput" placeholder= "razon para salir. A donde van?"></IonTextarea>
            </IonItem>

            <IonItem lines="none"></IonItem>

            <IonButton class="IonButton" expand="block">
                <IonLabel class="font-size">Enviar</IonLabel>
            </IonButton>
            

        </IonContent>
    </IonPage>

  );
};


export default GroupForm;
