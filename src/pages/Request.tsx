import { RouteComponentProps } from "react-router";
import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonPage, IonContent} from '@ionic/react';
import './Form.css'



/* 
todos:
    * Implements a backend that pulls all necessary data that includes, but not limited
    to name, email, and reason and a time a stamp.
    * Add buttons that either denies or accepts the request * See wiki for more details* 
*/ 
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