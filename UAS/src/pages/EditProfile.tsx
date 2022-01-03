import React, { useRef, useState } from 'react';
import { IonPage, IonToolbar, IonContent, IonAvatar, IonSearchbar, IonSlide, IonSlides, IonButton, IonCard, IonList, IonGrid, IonCol, IonRow, IonItem, IonLabel, useIonViewWillEnter, IonInput } from "@ionic/react";
import './css/profile.css';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import firebaseInit from '../FirebaseConfig';
import { getDocs, collection, getFirestore, addDoc, updateDoc } from '@firebase/firestore';
import { doc } from 'firebase/firestore';
import { useHistory } from 'react-router';

const EditProfile: React.FC = () => {
    const storage = getStorage(firebaseInit);
    const auth = getAuth(firebaseInit);
    const user = auth.currentUser;
    const [userData, setUser] = useState<Array<any>>([]);
    const db = getFirestore(firebaseInit);
    useIonViewWillEnter(() => {
        data();
    });

    const fullNameRef = useRef<HTMLIonInputElement>(null);
    const emailRef = useRef<HTMLIonInputElement>(null);
    const regionRef = useRef<HTMLIonInputElement>(null);
    const addressRef = useRef<HTMLIonInputElement>(null);
    const phoneRef = useRef<HTMLIonInputElement>(null);
    const history = useHistory();


    async function data() {
        const querySnapshot = await getDocs(collection(db, 'user'));
        setUser(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    async function saveEditProfile() {
        let image: string = ""
        let userid: string = ""
        {
            userData.filter((data) => data.userId === user?.uid).map((data) => {
                image = data.image
                userid = data.id
            })
        }
        let data = {
            userId: user?.uid,
            fullName: fullNameRef.current?.value,
            address: addressRef.current?.value,
            region: regionRef.current?.value,
            phone: phoneRef.current?.value,
            email: emailRef.current?.value,
            image: image,
            blob: "",
        };
        const docRef = doc(db, 'user', userid);
        try {
            await updateDoc(docRef, data)
            console.log("Update successfully, ", docRef.id);
            history.push("/tabs/profile")
        } catch (e: any) { console.log(e.message) }
    }

    return (
        <IonPage>
            <IonContent fullscreen className="ion-padding">
                <IonItem lines="none">
                    <IonLabel><h1><b>Edit Profile</b></h1></IonLabel>
                    <IonAvatar slot="end">
                        <img src="assets/icon/logo_size.jpg"></img>
                    </IonAvatar>
                </IonItem>

                {userData.filter((data) => data.userId === user?.uid).map((data) => (
                    <IonCard className="profileHeader ion-padding">
                        <IonAvatar className="avatar">
                            <img src={data.image} />
                        </IonAvatar>
                        <h1><IonInput type="text" ref={fullNameRef} value={data.fullName} disabled /></h1>
                        <IonGrid>
                            <IonItem>
                                <IonCol>Email</IonCol>
                                <IonCol className="ion-text-end">
                                    <IonInput type="text" ref={emailRef} value={data.email} disabled />
                                </IonCol>
                            </IonItem>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel position="floating">Region</IonLabel>
                                        <IonInput type="text" ref={regionRef} value={data.region} />
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel position="floating">Address</IonLabel>
                                        <IonInput type="text" ref={addressRef} value={data.address} />
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel position="floating">Phone</IonLabel>
                                        <IonInput type="text" ref={phoneRef} value={data.phone} />
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCard>
                ))}
                <div style={{ textAlign: 'center' }}>
                    <IonButton onClick={saveEditProfile} expand="block" fill="solid">
                        Save
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default EditProfile;