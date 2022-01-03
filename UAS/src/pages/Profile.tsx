import React, { useState } from 'react';
import { IonPage, IonToolbar, IonContent, IonAvatar, IonSearchbar, IonSlide, IonSlides, IonButton, IonCard, IonList, IonGrid, IonCol, IonRow, IonItem, IonLabel, useIonViewWillEnter } from "@ionic/react";
import './css/profile.css';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import firebaseInit from '../FirebaseConfig';
import { getDocs, collection, getFirestore } from '@firebase/firestore';

const Profile: React.FC = () => {
    const storage = getStorage(firebaseInit);
    const auth = getAuth(firebaseInit);
    const user = auth.currentUser;
    const [userData, setUser] = useState<Array<any>>([]);
    const db = getFirestore(firebaseInit);
    useIonViewWillEnter(() => {
        data();
      });

    async function data() {
        const querySnapshot = await getDocs(collection(db, 'user'));
        setUser(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    return (
        <IonPage>
            <IonContent fullscreen className="ion-padding">
                <IonItem lines="none">
                    <IonLabel><h1><b>Profile</b></h1></IonLabel>
                    
                </IonItem>

                {userData.filter((data) => data.userId === user?.uid).map((data) => (
                    <IonCard className="profileHeader ion-padding" key={data.id}>
                        <IonAvatar className="avatar">
                            <img src={data.image} />
                        </IonAvatar>
                        <h1>{data.fullName}</h1>
                        <IonButton routerLink='/tabs/EditProfile'>Edit Profile</IonButton>
                        <IonList>
                            <IonItem>
                                <IonCol>Email</IonCol>
                                <IonCol className="ion-text-end">{data.email}</IonCol>
                            </IonItem>
                            <IonItem>
                                <IonCol>Region</IonCol>
                                <IonCol className="ion-text-end">{data.region}</IonCol>
                            </IonItem>
                            <IonItem>
                                <IonCol>Address</IonCol>
                                <IonCol className="ion-text-end">{data.address}</IonCol>
                            </IonItem>
                            <IonItem>
                                <IonCol>Phone</IonCol>
                                <IonCol className="ion-text-end">{data.phone}</IonCol>
                            </IonItem>
                        </IonList>
                    </IonCard>
                ))}
                <div style={{ textAlign: 'center' }}>
                    <IonButton href="/login" expand="block" fill="outline" color="danger">
                        Log Out
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Profile;