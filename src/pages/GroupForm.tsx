import { IonItem,IonInput, IonButtons, IonButton,IonLabel, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonTextarea } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import './Page.css';



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
                <IonLabel position="stacked">Nombres de Hombres</IonLabel>
                <IonTextarea />
            </IonItem>
            
            <IonItem>
                <IonLabel position="stacked">Nombres de Mujeres</IonLabel>
                <IonTextarea />
            </IonItem>
            <IonItem>
                <IonLabel>Email de Jefe</IonLabel>
                <IonInput type="text"/>
            </IonItem>
            <IonItem>
                <IonLabel position="stacked">Reason</IonLabel>
                <IonTextarea />
            </IonItem>
        </IonContent>
    </IonPage>

  );
};


export default GroupForm;
