import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory } from 'react-router';
import firebaseInit from '../FirebaseConfig';
import { getDownloadURL, getStorage, ref, uploadBytes } from '@firebase/storage';
import { addDoc, collection, getFirestore } from '@firebase/firestore';

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [region, setRegion] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [file, setFile] = useState<File>();
    const [fileName, setFileName] = useState("");
    const history = useHistory();
    const storage = getStorage();
    const db = getFirestore(firebaseInit);

    const auth = getAuth();
    let user: any;

    const fileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFile(event.target!.files![0]);
        setFileName(event.target!.files![0].name);
    };

    async function RegisterUser() {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            // .then((userCredential) => {
            //     // Signed in 
            //     user = userCredential.user.uid;
            //     console.log(userCredential.user.uid);
            //     history.push("/Login")
            // })
            // .catch((error) => {
            //     const errorCode = error.code;
            //     const errorMessage = error.message;
            //     // ..
            // });
            await createUser(res.user.uid);
            history.push('/tabs/Home');
        }catch(e:any){console.log(e.message)}
    }

    async function createUser(uid: string) {
        const storageRef = ref(storage, fileName);
        uploadBytes(storageRef, file as Blob)
            .then(() => {
                getDownloadURL(ref(storage, fileName)).then((url) => {
                    addUser(uid, url);
                });
            })
            .catch((error) => { });
    }

    const addUser = async (uid: string, url: string) => {
        let data = {
            userId: uid,
            fullName: fullName,
            address: address,
            region: region,
            phone: phone,
            email: email,
            image: url,
            blob: "",
        };
        try {
            const docRef = await addDoc(collection(db, 'user'), data);
            console.log("Document Added successfully, ", docRef.id);
        } catch (e:any) {console.log(e.message)}
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className="ion-text-center">Register</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding ion-text-center">
                <IonCard className="cardInput">
                    <IonCardContent>
                    <img src="assets/icon/logo_size.jpg"></img>
                        <IonItem>
                            <IonLabel position="floating">Full Name</IonLabel>
                            <IonInput type="text" onIonChange={(e: any) => setFullName(e.target.value)} />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Email</IonLabel>
                            <IonInput type="email" onIonChange={(e: any) => setEmail(e.target.value)} />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Password</IonLabel>
                            <IonInput type="password" onIonChange={(e: any) => setPassword(e.target.value)} />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Region</IonLabel>
                            <IonInput type="text" onIonChange={(e: any) => setRegion(e.target.value)} />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Address</IonLabel>
                            <IonInput type="text" onIonChange={(e: any) => setAddress(e.target.value)} />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Phone</IonLabel>
                            <IonInput type="text" onIonChange={(e: any) => setPhone(e.target.value)} />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="stacked">Profile Image</IonLabel>
                            <input type="file" onChange={fileChangeHandler} />
                        </IonItem>
                        <IonButton expand="block" onClick={RegisterUser}>Register</IonButton>
                    </IonCardContent>
                </IonCard>
                <IonCard>
                <p className="ion-text-center">Have an account? <a href="/login">Log In</a></p>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}

export default Register;