import { RouteComponentProps } from "react-router";
import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonPage, IonLabel, IonItem, IonInput, IonContent, IonButton} from '@ionic/react';
import './Form.css'


/*
  Inital data. All set to an empty string. As well have event handlers for data.
  Author: @wrightjjw
*/
let username = ""
let password = ""


function handleUsername(event: any) {
    username = event.target.value;
}

function handlePassword(event: any) {
    password = event.target.value;
}

/*
  Todo: Replace code to work with server side. Should have authentication services
  Author: @wrightjjw
*/
function handleSubmit() {
    console.log(username, password);
}

/*  
    Login UI
    Author: @njw32
*/
const Login: React.FC<RouteComponentProps<{name: string;}>> = ({ match }) => {
    return (
        /*
            Translation: Permiso Para Dormir Fuera del Dormitorio -> Permision for sleeping outside the dormitory
                   Iniciar Sesión -> Login
                    Nombre de Usuario -> User name
                    Contraseña -> Password
                    Hola, Bienvenidos! -> Hello, Welcome
        */
    
        <IonPage>
            
            <IonHeader>
                    <IonToolbar>
                        <IonTitle>Hola, Bienvenidos!</IonTitle>
                    </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonItem lines ="none">
                        <IonLabel class = "padding" position ="stacked">
                            Nombre de Usuario
                        </IonLabel>
                        <IonInput class="IonInput" placeholder="Username" type="text" onInput={handleUsername}></IonInput>
                </IonItem>

                <IonItem lines ="none">
                        <IonLabel class = "padding" position ="stacked">
                            Contraseña
                        </IonLabel>
                        <IonInput class="IonInput" placeholder="Password" type="password" onInput={handlePassword}></IonInput>
                </IonItem>

                {/* 
                 Submit button, takes in an onClick handler to process handleSubmit()
                */}
                <IonItem lines ="none"></IonItem>
                <IonButton href="/home" expand="block" onClick={() => {handleSubmit()}}><IonLabel>Iniciar Sesión</IonLabel></IonButton>
            </IonContent>

        </IonPage>
    );
}
export default Login;