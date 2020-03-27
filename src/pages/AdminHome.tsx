import { RouteComponentProps } from "react-router";
import React from 'react';
import {folderOutline} from 'ionicons/icons'
import { IonHeader,IonItem, IonToolbar, IonTitle,IonButton, IonPage, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonIcon} from '@ionic/react';
import './Form.css'

let list: Array<Array<string>> = [["Permiso de Pareja", "marcos@riogrande.edu", "/requests/0"], ["Permiso de dormir afuera", "carlos@riogrande.edu", "/requests/1"],
 ["Permiso Mixto", "urmom@riogrande.edu", "/requests/2"], ["Permiso Mixto", "tumadre@riogrande.edu", "/requests/3"]];

const AdminHome: React.FC<RouteComponentProps<{name: string;}>> = ({ match }) => {
    return (
    
        <IonPage>

            <IonHeader>
                <IonToolbar>
                    <IonItem lines ="none">
                        <IonButton>
                            <IonIcon icon ={folderOutline} item-left></IonIcon>
                        </IonButton>
                        <IonTitle>Archive</IonTitle>
                    </IonItem>
                </IonToolbar>
            </IonHeader>
            <IonItem lines = "full" >
                <IonTitle class = "AdminHome">Incoming Requests</IonTitle>
            </IonItem>
            <IonGrid>
            {list.map(thing => (
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
            
                
            
        </IonPage>
    );
}
export default AdminHome;