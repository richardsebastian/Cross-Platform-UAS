import { IonContent, IonHeader,IonApp, IonListHeader,IonAvatar, IonList, IonItem, IonRow, IonTitle, IonPage, IonButton, IonToolbar, IonMenuButton, IonLabel, IonText, IonGrid, IonBackButton, IonButtons, IonCard } from '@ionic/react';
import './css/AboutUs.css';
import { useHistory } from 'react-router-dom';

const AboutUs: React.FC = () => {
const backHome = useHistory();
  return (
<IonApp>
    <IonHeader translucent>
        <IonToolbar>
            <IonButtons slot="start">
                <IonBackButton text="" defaultHref="/tabs/Home"/>
            </IonButtons>
            <IonTitle>
                About Us
            </IonTitle>
        </IonToolbar>
    </IonHeader>

<IonContent>
    
        <IonListHeader>
        TourAssistant Team
        </IonListHeader>
        <IonCard>
    <IonList> 
        <IonItem>
            <IonAvatar slot="start">
                <img src="assets/images/ribas.jpg"></img>
            </IonAvatar>
            <IonLabel>
                <h2>Richard Sebastian</h2>
                <h3>00000033861</h3>
            </IonLabel>
        </IonItem>
        <IonItem>
            <IonAvatar slot="start">
                <img src="assets/images/danang.jpg"></img>
            </IonAvatar>
            <IonLabel>
                <h2>Afreza Danang Fathoni</h2>
                <h3>00000034187</h3>
            </IonLabel>
        </IonItem>
        <IonItem>
            <IonAvatar slot="start">
                <img src="assets/images/aldo.jpg"></img>
            </IonAvatar>
            <IonLabel>
                <h2>Leonardo Martine</h2>
                <h3>00000033749</h3>
            </IonLabel>
        </IonItem>
        <IonItem>
            <IonAvatar slot="start">
                <img src="assets/images/moren.jpg"></img>
            </IonAvatar>
            <IonLabel>
                <h2>Maureen Zerlina Oktaviani</h2>
                <h3>00000036850</h3>
            </IonLabel>
        </IonItem>
        <IonItem>
            <IonAvatar slot="start">
                <img src="assets/images/arvendo.jpg"></img>
            </IonAvatar>
            <IonLabel>
                <h2>Arvendo Manuel Lextian</h2>
                <h3>00000034808</h3>
            </IonLabel>
        </IonItem>
    </IonList>
    </IonCard>
</IonContent>

</IonApp>

  
    );

};



export default AboutUs;
