import { RouteComponentProps } from "react-router";
import React from 'react';
import {folderOutline} from 'ionicons/icons'
import { IonHeader,IonItem, IonContent, IonToolbar, IonTitle,IonButton, IonPage, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonIcon} from '@ionic/react';
import './Form.css'


/*
    Author: @njw32
    todo:   * When clicked on, the buttons will take them to the item based on the id.
            * Remove the current items in testList and populate it with data from client side
            * Populate the data from server.  
*/

let testList: Array<Array<string>> = [["Permiso de Pareja", "marcos@riogrande.edu", "/requests/0"], ["Permiso de dormir afuera", "carlos@riogrande.edu", "/requests/1"],
 ["Permiso Mixto", "Miranda@riogrande.edu", "/requests/2"], ["Permiso Mixto", "Jeff@riogrande.edu", "/requests/3"]];

const AdminHome: React.FC<RouteComponentProps<{name: string;}>> = ({ match }) => {
    return (
    
        <IonPage>

            <IonHeader>
                <IonToolbar>
                    <IonItem lines ="none">
                        <IonButton href ='/Archive'>
                            <IonIcon icon ={folderOutline} item-left></IonIcon>
                        </IonButton>
                        <IonTitle>Incoming Requests</IonTitle>
                    </IonItem>
                </IonToolbar>
            </IonHeader>

            {/* 
                Mapped items for current requests data.
            */}
            <IonContent>
                <IonGrid>
                {testList.map(thing => (
                    <IonRow>
                        <IonCol>
                            <IonCard button href = {thing[2]}>
                                <IonCardHeader>
                                    <IonCardTitle color = "danger">{thing[0]}</IonCardTitle>
                                </IonCardHeader>
                                
                                <IonCardContent>{thing[1]}</IonCardContent>

                            </IonCard>
                        </IonCol>
                    </IonRow>
                ))}
            </IonGrid>
            </IonContent>
            
                
            
        </IonPage>
    );
}
export default AdminHome;