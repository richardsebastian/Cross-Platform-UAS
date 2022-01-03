import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useHistory } from 'react-router';
import '../FirebaseConfig';
import { logoGoogle } from "ionicons/icons";

import Tabs from './Tabs';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const auth = getAuth();
    const provider = new GoogleAuthProvider;

    async function loginWithGoogle() {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user;
                // After login success go to home page
                history.push('/tabs');
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    async function login() {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(userCredential);
                history.push('/tabs');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className="ion-text-center">Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding ion-text-center">
                <IonCard className="cardInput">
                    <IonCardContent>
                        <img src="assets/icon/logo_size.jpg"></img>
                        <IonItem>
                            <IonLabel position="floating">Email</IonLabel>
                            <IonInput type="email" onIonChange={(e: any) => setEmail(e.target.value)} />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Password</IonLabel>
                            <IonInput type="password" onIonChange={(e: any) => setPassword(e.target.value)} />
                        </IonItem>
                        <br />
                        <IonButton expand="block" onClick={login}>Login</IonButton>
                        <br />
                        <h2 className="ion-text-center">OR</h2>
                        <br />
                        <IonButton  onClick={loginWithGoogle}>
                            <IonIcon icon={logoGoogle} slot="start"></IonIcon>
                            Login with Google
                        </IonButton>
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <p className="ion-text-center">Don't have an account? <a href="/register">Sign Up</a></p>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}

export default Login;