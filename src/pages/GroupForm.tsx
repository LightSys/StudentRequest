import { IonItem, IonButtons, IonLabel, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTextarea, IonButton, IonMenuButton, IonInput, IonBackButton } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import './Form.css';


//Permission Form for Mixed Groups (Permiso Mixto) 
const GroupForm: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {
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
                    <IonTextarea class="IonInput" placeholder="Nate Walter, Josh Wright, Joey Faas"></IonTextarea>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel class="padding" position="stacked">
                        Nombres de Mujeres
                </IonLabel>
                    <IonTextarea class="IonInput" placeholder="Natalie Walter, Jessica Wright, Josephina Faas"></IonTextarea>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel class="padding" position="stacked">
                        Email
                </IonLabel>
                    <IonInput class="IonInput" placeholder="email@riogrande.edu"></IonInput>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel class="padding" position="stacked">
                        Donde?
                </IonLabel>
                    <IonInput class="IonInput" placeholder=" A donde van?"></IonInput>
                </IonItem>

                <IonItem lines="none">
                    <IonLabel class="padding" position="stacked">
                        Reason
                </IonLabel>
                    <IonTextarea class="IonInput" placeholder="razon para salir"></IonTextarea>
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
