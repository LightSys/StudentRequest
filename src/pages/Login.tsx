import { RouteComponentProps } from "react-router";
import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonPage, IonLabel, IonItem, IonInput, IonContent, IonButton} from '@ionic/react';
import './Form.css'

const Login: React.FC<RouteComponentProps<{name: string;}>> = ({ match }) => {
    return (
    
        <IonPage>
            
            <IonHeader>
                    <IonToolbar>
                        <IonTitle>Login</IonTitle>
                    </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonItem lines ="none">
                        <IonLabel class = "padding" position ="stacked">
                            Username
                        </IonLabel>
                        <IonInput class="IonInput" placeholder="Username" type="text"></IonInput>
                </IonItem>

                <IonItem lines ="none">
                        <IonLabel class = "padding" position ="stacked">
                            Password
                        </IonLabel>
                        <IonInput class="IonInput" placeholder="Password" type="password"></IonInput>
                </IonItem>


                <IonButton href="/home" expand="block"><IonLabel>Sign In</IonLabel></IonButton>
            </IonContent>

        </IonPage>
    );
}
export default Login;