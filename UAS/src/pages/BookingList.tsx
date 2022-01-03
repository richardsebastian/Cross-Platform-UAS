import { IonAvatar, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCol, IonContent, IonDatetime, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { getStorage, uploadBytes, ref, getDownloadURL } from 'firebase/storage';
import { arrowBackOutline } from 'ionicons/icons';
import { useEffect, useRef, useState } from 'react';
import { useHistory } from "react-router";
import firebaseInit from '../FirebaseConfig';
import app from '../FirebaseConfig';

const ShowBook: React.FC = () => {

  const [order, setOrder] = useState<Array<any>>([]);
  const history = useHistory();
  const auth = getAuth(firebaseInit);
  const user = auth.currentUser;
  const db = getFirestore(firebaseInit);

  useIonViewWillEnter(() => {
    data();
  });

  async function data() {
    const querySnapshot = await getDocs(collection(db, 'booking'));
    setOrder(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonItem href="tabs/Booking" slot="start" lines="none" detailIcon={arrowBackOutline} />
          <IonTitle>Booking List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* tampilin list order */}
        {order.filter((data) => data.userId === user?.uid).map((data) => (
          <IonCard className="profileHeader ion-padding" key={data.id}>
            <IonCardHeader color="danger" className="cardHeader">
              Tour Guide
            </IonCardHeader>
            <IonList>
              <IonItem>
                <IonCol>FullName</IonCol>
                <IonCol className="ion-text-end">{data.fullName}</IonCol>
              </IonItem>
              <IonItem>
                <IonCol>Destination</IonCol>
                <IonCol className="ion-text-end">{data.destination}</IonCol>
              </IonItem>
              <IonItem>
                <IonCol>Tour Guide Code</IonCol>
                <IonCol className="ion-text-end">{data.tourGuide}</IonCol>
              </IonItem>
              <IonItem>
                <IonCol>Photographer Code</IonCol>
                <IonCol className="ion-text-end">{data.photographer}</IonCol>
              </IonItem>
              <IonItem>
                <IonCol>Book From</IonCol>
                <IonCol className="ion-text-end">{data.sDate}</IonCol>
              </IonItem>
              <IonItem>
                <IonCol>Book Until</IonCol>
                <IonCol className="ion-text-end">{data.eDate}</IonCol>
              </IonItem>
              <IonItem>
                <IonCol>Description</IonCol>
                <IonCol className="ion-text-end">{data.desc}</IonCol>
              </IonItem>
              <IonItem>
                <IonRow>
                  <IonRow style={{ textAlign: 'center' }}>
                    <IonCol>Proof of Payment</IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol><img src={data.imageUrl} /></IonCol>
                  </IonRow>
                </IonRow>
              </IonItem>
            </IonList>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default ShowBook;
