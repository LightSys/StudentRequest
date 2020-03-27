import { RouteComponentProps } from "react-router";
import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonPage, IonContent} from '@ionic/react';
import './Form.css'




const Request: React.FC<RouteComponentProps<{name: string;}>> = ({ match }) => {
    return (
   
    
        <IonPage>
            
            <IonHeader>
                    <IonToolbar>
                        <IonTitle>Generic Request</IonTitle>
                    </IonToolbar>
            </IonHeader>
            <IonContent>
                
                
                <IonTitle>

                </IonTitle>


            </IonContent>
            
        

        </IonPage>
    );
}
export default Request;