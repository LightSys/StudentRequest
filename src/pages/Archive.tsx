import { RouteComponentProps } from "react-router";
import React from 'react';
import { IonHeader, IonToolbar, IonContent, IonButtons, 
    IonBackButton, IonTitle, IonPage, IonGrid, IonRow, IonCol, IonCard, 
    IonCardHeader, IonCardTitle, IonCardContent} from '@ionic/react';
import './Form.css'

/*
    todo:   * When clicked on, the buttons will take them to the item based on the id.
            * Remove the current items in the list and populate it with data from client side
            * Populate the data from server.  
            * The data will remain in this page for one month, but the database side,
                it will have to be longer based on governemnt regulation.
*/

let testList: Array<Array<string>> = [["Permiso de Pareja", "marcos@riogrande.edu", "/requests/0", "Jan 4, 2020"], ["Permiso de dormir afuera", "carlos@riogrande.edu", "/requests/1",  "Mar 9, 2020"],
 ["Permiso Mixto", "Miranda@riogrande.edu", "/requests/2",  "Jul 25, 2019"], ["Permiso Mixto", "Jeff@riogrande.edu", "/requests/3", "Mar 9, 2020"]];

const Archive: React.FC<RouteComponentProps<{name: string;}>> = ({ match }) => {
    return (
    
        <IonPage>
            <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/AdminHome" />
                        </IonButtons>
                        <IonTitle>Archive</IonTitle>
                    </IonToolbar>
            </IonHeader>

            {/* 
                Mapped items for archived data.
            */}
            <IonContent>
                <IonGrid>
                {testList.map(thing => (
                    <IonRow>
                        <IonCol>
                            <IonCard class="archive" button href = {thing[2]}>
                                <IonCardHeader>
                                    <IonCardTitle class = "archiveTitle" color = "danger">{thing[1]}</IonCardTitle>
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
            </IonContent>
        </IonPage>
    );
}
export default Archive;