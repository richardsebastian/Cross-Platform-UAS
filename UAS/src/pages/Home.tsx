import { IonContent, IonPage, IonIcon, IonAvatar, IonLabel, IonCol, IonSlide, IonSlides, IonItem, IonGrid, IonButton, IonCard, IonCardContent, IonToolbar, IonSearchbar, IonList, IonCardTitle, } from '@ionic/react';
import './css/Home.css';
import { useHistory } from 'react-router-dom'

const Home = () => {
  const aboutUs = useHistory();
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <IonItem lines="none">
          <IonLabel><h1><b>Explore</b></h1></IonLabel>
          <a href="/aboutUs">
            <IonAvatar slot="end">
              <img src="assets/icon/logo_size.jpg"></img>
            </IonAvatar>
          </a>
        </IonItem>

        <h4 className="ion-text-center">Where Do You Want to Visit?</h4>

        <IonList>

          <IonCard className="Card">
            <IonCardTitle className="ion-text-center ion-padding">What's on Java Island?</IonCardTitle>
            <img src="assets/images/merapi.jpg" />
            <IonToolbar>
              <IonCardContent className="ion-text-left" >
                <IonLabel><h5 style={{ fontSize: '15px' }}>Java is the most populous island with various destinations</h5></IonLabel>
              </IonCardContent>
            </IonToolbar>
          </IonCard>

          <IonSlides class="ListSlides">
            <IonSlide>
              <div className="wrapper">
                <div className="card">
                  <figure className="card_thumbnail">
                    <img src="assets/images/bromo.jpg"></img>
                    <span className="card_title">Bromo Mountain</span>
                  </figure>
                </div>
              </div>
            </IonSlide>
            <IonSlide>
              <div className="wrapper">
                <div className="card">
                  <figure className="card_thumbnail">
                    <img src="assets/images/borobudur.jpg"></img>
                    <span className="card_title">Borobudur Temple</span>
                  </figure>
                </div>
              </div>
            </IonSlide>
            <IonSlide>
              <div className="wrapper">
                <div className="card">
                  <figure className="card_thumbnail">
                    <img src="assets/images/ujungkulon.jpg"></img>
                    <span className="card_title">Ujung Kulon National Park</span>
                  </figure>
                </div>
              </div>
            </IonSlide>
          </IonSlides>

          <IonCard className="Card">
            <IonCardTitle className="ion-text-center ion-padding">What's on Sumatera Island?</IonCardTitle>
            <img src="assets/images/toba.jpg" />
            <IonToolbar>
              <IonCardContent className="ion-text-left" >
                <IonLabel><h5 style={{ fontSize: '15px' }}>Sumatra has a lot of tourism, which is accompanied by its cultural diversity</h5></IonLabel>
              </IonCardContent>
            </IonToolbar>
          </IonCard>

          <IonSlides class="ListSlides">
            <IonSlide>
              <div className="wrapper">
                <div className="card">
                  <figure className="card_thumbnail">
                    <img src="assets/images/pesisirkalida.jpg"></img>
                    <span className="card_title">Pesisir Kalianda</span>
                  </figure>
                </div>
              </div>
            </IonSlide>
            <IonSlide>
              <div className="wrapper">
                <div className="card">
                  <figure className="card_thumbnail">
                    <img src="assets/images/danauranau.jpg"></img>
                    <span className="card_title">Danau Ranau</span>
                  </figure>
                </div>
              </div>
            </IonSlide>
            <IonSlide>
              <div className="wrapper">
                <div className="card">
                  <figure className="card_thumbnail">
                    <img src="assets/images/pulaubanda.jpg"></img>
                    <span className="card_title">Pulau Sabang</span>
                  </figure>
                </div>
              </div>
            </IonSlide>
          </IonSlides>

          <IonCard className="Card">
          <IonCardTitle className="ion-text-center ion-padding">What's on Sulawesi Island?</IonCardTitle>
            <img src="assets/images/bunaken.jpg" />
            <IonToolbar>
              <IonCardContent className="ion-text-left" >
                <IonLabel><h5 style={{ fontSize: '15px' }}>Sulawesi is an island that has quite a lot of destinations, especially part of their sea </h5></IonLabel>
              </IonCardContent>
            </IonToolbar>
          </IonCard>

          <IonSlides class="ListSlides">
            <IonSlide>
              <div className="wrapper">
                <div className="card">
                  <figure className="card_thumbnail">
                    <img src="assets/images/tana-toraja.jpg"></img>
                    <span className="card_title">Tana Toraja</span>
                  </figure>
                </div>
              </div>
            </IonSlide>
            <IonSlide>
              <div className="wrapper">
                <div className="card">
                  <figure className="card_thumbnail">
                    <img src="assets/images/wakatobi.jpeg"></img>
                    <span className="card_title">Wakatobi</span>
                  </figure>
                </div>
              </div>
            </IonSlide>
            <IonSlide>
              <div className="wrapper">
                <div className="card">
                  <figure className="card_thumbnail">
                    <img src="assets/images/batimurung.jpg"></img>
                    <span className="card_title">Taman Nasional Bantimurung</span>
                  </figure>
                </div>
              </div>
            </IonSlide>
          </IonSlides>

          <IonCard className="Card">
          <IonCardTitle className="ion-text-center ion-padding">What's on Kalimantan Island?</IonCardTitle>
            <img src="assets/images/pulauberas.jpg" />
            <IonToolbar>
              <IonCardContent className="ion-text-left" >
                <IonLabel><h5 style={{ fontSize: '15px' }}>Kalimantan is one of the destinations with the beauty of vast forests</h5></IonLabel>
              </IonCardContent>
            </IonToolbar>
          </IonCard>

          <IonSlides class="ListSlides">
            <IonSlide>
              <div className="wrapper">
                <div className="card">
                  <figure className="card_thumbnail">
                    <img src="assets/images/Pulau-Kakaban.jpg"></img>
                    <span className="card_title">Pulau Kakaban</span>
                  </figure>
                </div>
              </div>
            </IonSlide>
            <IonSlide>
              <div className="wrapper">
                <div className="card">
                  <figure className="card_thumbnail">
                    <img src="assets/images/Danau-Labuan-Cermin.jpg"></img>
                    <span className="card_title">Danau Labuan Cermin</span>
                  </figure>
                </div>
              </div>
            </IonSlide>
            <IonSlide>
              <div className="wrapper">
                <div className="card">
                  <figure className="card_thumbnail">
                    <img src="assets/images/Gua Haji Mangku.jpg"></img>
                    <span className="card_title">Gua Haji Mangku</span>
                  </figure>
                </div>
              </div>
            </IonSlide>
          </IonSlides>

          <IonCard className="Card">
          <IonCardTitle className="ion-text-center ion-padding">What's on Papua Island?</IonCardTitle>
            <img src="assets/images/cendrawasih.jpg" />
            <IonToolbar>
              <IonCardContent className="ion-text-left" >
                <IonLabel><h5 style={{ fontSize: '15px' }}>Papua is one of the treasures with the beauty of the sea in every part</h5></IonLabel>
              </IonCardContent>
            </IonToolbar>
          </IonCard>

          <IonSlides class="ListSlides">
            <IonSlide>
              <div className="wrapper">
                <div className="card">
                  <figure className="card_thumbnail">
                    <img src="assets/images/rajaampat.jpg"></img>
                    <span className="card_title">Raja Ampat</span>
                  </figure>
                </div>
              </div>
            </IonSlide>
            <IonSlide>
              <div className="wrapper">
                <div className="card">
                  <figure className="card_thumbnail">
                    <img src="assets/images/Danau-Paniai.jpeg"></img>
                    <span className="card_title">Danau Paniai</span>
                  </figure>
                </div>
              </div>
            </IonSlide>
            <IonSlide>
              <div className="wrapper">
                <div className="card">
                  <figure className="card_thumbnail">
                    <img src="assets/images/DesaSawandarek.jpeg"></img>
                    <span className="card_title">Desa Sawandarek</span>
                  </figure>
                </div>
              </div>
            </IonSlide>
          </IonSlides>
        </IonList>
      </IonContent>
    </IonPage>
  );

};

export default Home;
