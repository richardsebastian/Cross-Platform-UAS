import React, { useState } from 'react';
import { IonPage, IonToolbar, IonContent, IonAvatar, IonSearchbar, IonSlide, IonSlides, IonCard, IonCardHeader, IonGrid, IonCol, IonRow, IonButton, IonItem, IonLabel, IonList, IonSegment, IonSegmentButton } from "@ionic/react";

const Booking: React.FC = () => {
  const [select, setSelect] = useState<'guide' | 'photographer'>('guide');
  const selectSelectHandler = (event: CustomEvent) => 
  {
    setSelect(event.detail.value)
  }
    return (
        <IonPage>
            <IonContent fullscreen className="ion-padding">
              <IonItem lines="none">
                <IonLabel><h1><b>Choose Agent</b></h1></IonLabel>
                <a href="/aboutUs">
            <IonAvatar slot="end">
              <img src="assets/icon/logo_size.jpg"></img>
            </IonAvatar>
          </a>
              </IonItem>
                <IonSegment className="custom" onIonChange={selectSelectHandler}>
                  <IonSegmentButton value="guide">
                    Guide
                  </IonSegmentButton>
                  <IonSegmentButton value="photographer">
                    Photographer
                  </IonSegmentButton>
                </IonSegment>

                {/* guide */}
                {select === 'guide' ?
                 <IonList>
                 <IonItem>
                   <IonAvatar slot="start">  
                   <img src="assets/images/avatar1.png"></img>
                   </IonAvatar>
                   <IonLabel>
                     <h2>Finn</h2>
                     <h3>Rating : ★ ★ ★ ★ </h3>
                     <p>
                     Language : Bahasa, English, Mandarin
                     </p>
                     <p>
                     Code : G01
                     </p>
                     <p>
                     Price : Rp 300.000,00
                     </p>
                   </IonLabel>
                 </IonItem>
                 <IonItem>
                   <IonAvatar slot="start">  
                   <img src="assets/images/avatar2_0.png"></img>
                   </IonAvatar>
                   <IonLabel>
                     <h2>Paul</h2>
                     <h3 color="primary">Rating : ★ ★ ★ </h3>
                     <p>
                     Language : Bahasa, English 
                     </p>
                     <p>
                     Code :G02
                     </p>
                     <p>
                     Price : Rp 300.000,00
                     </p>
                   </IonLabel>
                 </IonItem>
                 <IonItem>
                   <IonAvatar slot="start">  
                   <img src="assets/images/avatar3.png"></img>
                   </IonAvatar>
                   <IonLabel>
                     <h2>Jay</h2>
                     <h3 color="primary">Rating : ★ ★ ★ ★ ★ </h3>
                     <p>
                     Language : Bahasa, English, Spanish, Mandarin 
                     </p>
                     <p>
                     Code : G03
                     </p>
                     <p>
                     Price : Rp 300.000,00
                     </p>
                   </IonLabel>
                 </IonItem>
                 <IonItem>
                   <IonAvatar slot="start">  
                   <img src="assets/images/avatar1.png"></img>
                   </IonAvatar>
                   <IonLabel>
                     <h2>Fey</h2>
                     <h3 color="primary">Rating : ★ ★ ★ </h3>
                     <p>
                     Language : Bahasa, English
                     </p>
                     <p>
                     Code : G04
                     </p>
                     <p>
                     Price : Rp 300.000,00
                     </p>
                   </IonLabel>
                 </IonItem>
                 <IonItem>
                   <IonAvatar slot="start">  
                   <img src="assets/images/avatar5.png"></img>
                   </IonAvatar>
                   <IonLabel>
                     <h2>Poppy</h2>
                     <h3 color="primary">Rating : ★ ★ ★ ★ </h3>
                     <p>
                     Language : Bahasa, English, Dutch
                     </p>
                     <p>
                     Code : G05
                     </p>
                     <p>
                     Price : Rp 300.000,00
                     </p>
                   </IonLabel>
                 </IonItem>
               </IonList>
             : ''}

             {/* photographer */}
             {select === 'photographer' ?
               <IonList>
                    <IonItem>
                   <IonAvatar slot="start">  
                   <img src="assets/images/avatar1.png"></img>
                   </IonAvatar>
                   <IonLabel>
                     <h2>Dep</h2>
                     <h3 color="primary">Rating : ★ ★ ★ </h3>
                     <p>
                     Language : Bahasa, English
                     </p>
                     <p>
                     Code : P01
                     </p>
                     <p>
                     Price : Rp 250.000,00
                     </p>
                   </IonLabel>
                 </IonItem>
                 <IonItem>
                   <IonAvatar slot="start">  
                   <img src="assets/images/avatar2_0.png"></img>
                   </IonAvatar>
                   <IonLabel>
                     <h2>Bob</h2>
                     <h3 color="primary">Rating : ★ ★ ★ ★ ★ </h3>
                     <p>
                     Language : Bahasa, English, Mandarin, Spanish
                     </p>
                     <p>
                     Code : P02
                     </p>
                     <p>
                     Price : Rp 250.000,00
                     </p>
                   </IonLabel>
                 </IonItem>
                 <IonItem>
                   <IonAvatar slot="start">  
                   <img src="assets/images/avatar3.png"></img>
                   </IonAvatar>
                   <IonLabel>
                     <h2>Yeri</h2>
                     <h3 color="primary">Rating : ★ ★ ★ </h3>
                     <p>
                     Language : Bahasa, English, Malay
                     </p>
                     <p>
                     Code : P03
                     </p>
                     <p>
                     Price : Rp 250.000,00
                     </p>
                   </IonLabel>
                 </IonItem>
                 <IonItem>
                   <IonAvatar slot="start">  
                   <img src="assets/images/avatar4.png"></img>
                   </IonAvatar>
                   <IonLabel>
                     <h2>Tom</h2>
                     <h3 color="primary">Rating : ★ ★ ★ ★ </h3>
                     <p>
                     Language : Bahasa, English, Dutch
                     </p>
                     <p>
                     Code : P04
                     </p>
                     <p>
                     Price : Rp 250.000,00
                     </p>
                   </IonLabel>
                 </IonItem>
                 <IonItem>
                   <IonAvatar slot="start">  
                   <img src="assets/images/avatar5.png"></img>
                   </IonAvatar>
                   <IonLabel>
                     <h2>Josh</h2>
                     <h3 color="primary">Rating : ★ ★ ★ ★ </h3>
                     <p>
                     Language : Bahasa, English, Mandarin
                     </p>
                     <p>
                     Code : P05
                     </p>
                     <p>
                     Price : Rp 250.000,00
                     </p>
                   </IonLabel>
                 </IonItem>
               </IonList>
                : ''}
            </IonContent>
        </IonPage>
    );
};

export default Booking;