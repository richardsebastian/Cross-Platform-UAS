import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/*Page Variabel*/
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Tabs from './pages/Tabs';
import EditProfile from './pages/EditProfile';
import AboutUs from './pages/AboutUs';


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <IonRouterOutlet>
        <Route path="/AboutUs" component={AboutUs} />
          <Route path="/tabs" component={Tabs} />
          <Route path="/Home" component={Home} />
          <Route path="/EditProfile" component={EditProfile} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route exact path="/" render={() => <Redirect to="/Login" />} />
        </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;