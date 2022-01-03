import React from 'react';
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { book, bookmarkOutline, filter, homeOutline, people, person, personOutline } from "ionicons/icons";
import { Redirect, Route } from "react-router";
import Home from './Home';
import Booking from './Booking';
import Profile from './Profile';
import BookingList from './BookingList';
import AboutUs from './AboutUs';
import Tourguide from './Tourguide';
import { IonReactRouter } from '@ionic/react-router';
import EditProfile from './EditProfile';

const Tabs: React.FC = () => {
    return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tabs/home" component={Home} />
          <Route exact path="/tabs/booking" component={Booking} />
          <Route exact path="/tabs/tourguide" component={Tourguide} />
          <Route exact path="/tabs/profile" component={Profile} />
          <Route exact path="/tabs/EditProfile" component={EditProfile} />
          <Route exact path="/tabs/ShowBook" component={BookingList} />
          <Redirect exact path="/tabs" to="/tabs/home" />
        </IonRouterOutlet>
        <IonTabBar slot="bottom" color="primary">
          <IonTabButton href="/tabs/home" tab="home">
            <IonIcon icon={filter}></IonIcon>
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton href="/tabs/tourguide" tab="tourguide">
            <IonIcon icon={people}></IonIcon>
            <IonLabel>Agent</IonLabel>
          </IonTabButton>
          <IonTabButton href="/tabs/booking" tab="booking">
            <IonIcon icon={book}></IonIcon>
            <IonLabel>Booking</IonLabel>
          </IonTabButton>
          <IonTabButton href="/tabs/profile" tab="profile">
            <IonIcon icon={person}></IonIcon>
          <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
    );
};

export default Tabs;