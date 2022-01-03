import { IonAvatar, IonButton, IonCard, IonCardTitle, IonCol, IonContent, IonDatetime, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar, useIonLoading } from '@ionic/react';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { getStorage, uploadBytes, ref, getDownloadURL } from 'firebase/storage';
import { useEffect, useRef, useState } from 'react';
import { useHistory } from "react-router";
import './css/Booking.css';
import firebaseInit from '../FirebaseConfig';
import { getAdditionalUserInfo, getAuth, onAuthStateChanged } from '@firebase/auth';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { base64FromPath } from '@ionic/react-hooks/filesystem';
import { camera } from 'ionicons/icons';

const Booking: React.FC = () => {
  const history = useHistory();
  const [takenPhoto, setTakenPhoto] = useState<{
    path: string | undefined;
    preview: string;
  }>();
  const [fullName, setFullName] = useState('');
  const [destination, setDestination] = useState('');
  const [tourGuideC, setTourGuideC] = useState('');
  const [photographerC, setPhotographerC] = useState('');
  const [sDate, setSDate] = useState('');
  const [eDate, setEDate] = useState('');
  const [desc, setDesc] = useState('');
  const [load, dismiss] = useIonLoading();
  const db = getFirestore(firebaseInit);
  const storage = getStorage(firebaseInit);
  const auth = getAuth();

  let user: any;

  const addOrder = async() => {
    load({duration:1500, spinner: 'bubbles', cssClass: 'loading'});
    const storageRef = ref(storage, fileName);

    const base64 = await base64FromPath(takenPhoto!.preview);
    const photo = base64ToBlob(base64);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;

        uploadBytes(storageRef, photo as Blob).then(() => {
          console.log('upload file success');
          getDownloadURL(ref(storage, fileName)).then((url) => {
            addBook(uid, url);
          })
        })
        history.push('/tabs/ShowBook');
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }
  
  const fileName = new Date().getTime() + '.jpeg';

  const takePhotoHandler = async () => {
    const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 80,
        width: 500
    });
    console.log(photo);

    if(!photo || /*!photo.path ||*/ !photo.webPath){
        return;
    }

    setTakenPhoto({
        path: photo.path,
        preview: photo.webPath
    });
  };

  const base64ToBlob = (base64Image: string) => {
    const parts = base64Image.split(';base64,');
  
    const imageType = parts[0].split(':')[1];
  
    const decodedData = window.atob(parts[1]);
  
    const uInt8Array = new Uint8Array(decodedData.length);
  
    for (let i = 0; i < decodedData.length; ++i) {
      uInt8Array[i] = decodedData.charCodeAt(i);
    }
  
    return new Blob([uInt8Array], { type: imageType });
  };

  const addBook = async (uid:string, url: string) => {

    let data = {
      userId: uid,
      fullName: fullName,
      destination: destination,
      tourGuide: tourGuideC,
      photographer: photographerC,
      sDate: sDate,
      eDate: eDate,
      desc: desc,
      imageName: fileName,
      imageUrl: url
    };
    try {
      const docRef = await addDoc(collection(db, 'booking'), data);
      console.log("Document Added successfully, ", docRef.id);
      history.push('/tabs/showBook');
    } catch (e:any) {console.log(e.message)}
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
            <IonItem lines="none">
              <IonLabel><h1><b>Booking</b></h1></IonLabel>
              <a href="/aboutUs">
            <IonAvatar slot="end">
              <img src="assets/icon/logo_size.jpg"></img>
            </IonAvatar>
          </a>
          </IonItem>
          <IonToolbar>
          <IonRow>
            <IonCol>
              <IonButton href="/tabs/showBook" expand="block" color="danger">Show Book</IonButton>
            </IonCol>
          </IonRow>
          <h2 className="ion-text-center">OR</h2>
            <IonCard>
            <IonCardTitle className="ion-text-center ion-padding">Booking Form</IonCardTitle>
                <IonItem>
                    <IonLabel position="floating">Full Name</IonLabel>
                    <IonInput type="text" onIonChange={(e:any) => setFullName(e.target.value)}></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Destination</IonLabel>
                    <IonInput type="text" onIonChange={(e:any) => setDestination(e.target.value)}></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Tour Guide Code</IonLabel>
                    <IonInput type="text" onIonChange={(e:any) => setTourGuideC(e.target.value)}></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Photographer Code</IonLabel>
                    <IonInput type="text" onIonChange={(e:any) => setPhotographerC(e.target.value)}></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Start Destination Date</IonLabel>
                    <IonDatetime max="2200" displayFormat="DD MMMM YYYY" onIonChange={(e:any) => setSDate(e.target.value)}></IonDatetime>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">End Destination Date</IonLabel>
                    <IonDatetime max="2200" displayFormat="DD MMMM YYYY" onIonChange={(e:any) => setEDate(e.target.value)}></IonDatetime>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Description</IonLabel>
                    <IonInput type="text" onIonChange={(e:any) => setDesc(e.target.value)}></IonInput>
                </IonItem>
                <IonItem>
                  <IonRow>
                    <IonCol>
                      <IonLabel>Proof of Payment</IonLabel>
                    </IonCol>
                  </IonRow>
                  <IonRow className="ion-text-center">
                      <IonCol>
                          <div className="image-preview">
                              {!takenPhoto && <h3>No Photo Choosen.</h3>}
                              {takenPhoto && <img src={takenPhoto.preview} alt="Preview" />}
                          </div>
                          <IonButton fill="clear" onClick={takePhotoHandler}>
                              <IonIcon slot="start" icon={camera} />
                              <IonLabel>Take Photo</IonLabel>
                          </IonButton>
                      </IonCol>
                  </IonRow>
                </IonItem>
                <IonRow>
                  <IonCol>
                    <IonButton onClick={addOrder} expand="block">Book Now</IonButton>
                  </IonCol>
                </IonRow>
            </IonCard>
          </IonToolbar>
        </IonContent>
    </IonPage>
  );
};

export default Booking;
