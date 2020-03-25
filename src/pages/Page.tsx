import { IonButtons, IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonGrid, IonRow, IonCol } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import './Form.css';



const Page: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Hola, Bienvenidos!</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{ match.params.name }</IonTitle>
            <IonTitle size="small"></IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton expand="block" href="/GroupForm"><IonLabel class="font-size">Permiso Mixto</IonLabel></IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton expand="block" href="/offcampus"><IonLabel class="font-size">Dormir Fuera</IonLabel></IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton expand="block" href="/DatingForm"><IonLabel class="font-size">Permiso de Parejas Oficiales</IonLabel></IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
          
          {/* <IonItem lines="none" /> */}
          <IonItem lines="none" />
      </IonContent>
    </IonPage>
  );
};


export default Page;
