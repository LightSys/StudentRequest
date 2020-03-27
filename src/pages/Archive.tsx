import { RouteComponentProps } from "react-router";
import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonPage, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent} from '@ionic/react';
import './Form.css'

let testList: Array<Array<string>> = [["Permiso de Pareja", "marcos@riogrande.edu", "/requests/0", "Jan 4, 2020"], ["Permiso de dormir afuera", "carlos@riogrande.edu", "/requests/1",  "Mar 9, 2020"],
 ["Permiso Mixto", "urmom@riogrande.edu", "/requests/2",  "Jul 25, 2019"], ["Permiso Mixto", "tumadre@riogrande.edu", "/requests/3", "Mar 9, 2020"]];

const Archive: React.FC<RouteComponentProps<{name: string;}>> = ({ match }) => {
    return (
    
        <IonPage>
            <IonHeader>
                    <IonToolbar>
                        <IonTitle>Archive</IonTitle>
                    </IonToolbar>
            </IonHeader>
           
            <IonGrid>
            {testList.map(thing => (
                <IonRow>
                    <IonCol>
                        <IonCard class="archive" button href = {thing[2]}>
                            <IonCardHeader>
                                <IonCardTitle color = "danger">{thing[1]}</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <ul>
                                    <li>{thing[0]}</li>
                                    <li>{thing[3]}</li>
                                </ul>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
            ))}
            </IonGrid>
        </IonPage>
    );
}
export default Archive;