import { IonItem,IonButtons,IonLabel, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTextarea, IonButton } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import './GroupForm.css';



const GroupForm: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
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

            <IonItem>
                <IonLabel class = "label" position="stacked">Nombres de Hombres</IonLabel>
                <IonTextarea placeholder="Nate Walter, Josh Wright, Joey Faas"></IonTextarea>
            </IonItem>

            <IonItem>
                <IonLabel class = "label" position="stacked">Nombres de Mujeres</IonLabel>
                <IonTextarea placeholder="Natalie Walter, Jessica Wright, Josephina Faas"></IonTextarea>
            </IonItem>

            <IonItem>
                <IonLabel class = "label" position= "stacked">Email de Jefe</IonLabel>
                <IonTextarea placeholder = "email@riogrande.edu"></IonTextarea>
            </IonItem>

            <IonItem>
                <IonLabel class = "label" position="stacked">Reason</IonLabel>
                <IonTextarea placeholder= "razon para salir. A donde van?"></IonTextarea>
            </IonItem>


            <IonButton expand= "full" color="secondary">Enviar</IonButton>
            

        </IonContent>
    </IonPage>

  );
};


export default GroupForm;
