import { RouteComponentProps } from "react-router";
import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonPage} from '@ionic/react';


const Login: React.FC<RouteComponentProps<{name: string;}>> = ({ match }) => {
    return (
        <IonPage>
            <IonHeader>
                    <IonToolbar>
                        <IonTitle>Login</IonTitle>
                    </IonToolbar>
            </IonHeader>
        </IonPage>
        
    );
}
export default Login;