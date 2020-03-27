import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonGrid, IonRow, IonCol } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import './Form.css';



const Page: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {
  // This page directs users to all the forms they wish to use --STUDENT HOME PAGE--
  // Author: @njw32
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hola, Bienvenidos!</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton expand="block" href="/GroupForm"><IonLabel class="font-size">Permiso Mixto</IonLabel></IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton expand="block" href="/offcampus"><IonLabel class="font-size">Permiso Para Dormir Fuera</IonLabel></IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton expand="block" href="/DatingForm"><IonLabel class="font-size">Permiso de Parejas Oficiales</IonLabel></IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
          <IonItem lines="none" />
      </IonContent>
    </IonPage>
  );
};


export default Page;
