import Page from './pages/Page';
import React, { useState } from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

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

/* Pages */
import OffCampus from './pages/OffCampus';
import GroupForm from './pages/GroupForm';
import DatingForm from './pages/DatingForm';
import Login from './pages/Login';
import AdminHome from './pages/AdminHome';
import Archive from './pages/Archive';
import Request from './pages/Request';

const App: React.FC = () => {

  // eslint-disable-next-line
  const [selectedPage, setSelectedPage] = useState('');

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          {/* <Menu selectedPage={selectedPage} /> */}
          <IonRouterOutlet id="main">
            <Route path="/page/:name" render={(props) => {
              setSelectedPage(props.match.params.name);
              return <Page {...props} />;
            }} exact={true} />
            <Route path="/" render={() => <Redirect to="/Login" />} exact={true} />
            <Route path="/home" component={Page} />
            <Route path="/AdminHome" render={(props) => {
              setSelectedPage(props.match.params.name);
              return <AdminHome {...props} />;
              }} exact={true} />
            <Route path="/requests/:id" render={(props) => {
            setSelectedPage(props.match.params.name);
            return <Request {...props} />;
            }} exact={true} />
            <Route path="/Login" render={(props) => {
              setSelectedPage(props.match.params.name);
              return <Login {...props} />;
              }} exact={true} />
            <Route path="/Archive" render={(props) => {
            setSelectedPage(props.match.params.name);
            return <Archive {...props} />;
            }} exact={true} />
            <Route path="/DatingForm" render={(props) => {
              setSelectedPage(props.match.params.name);
              return <DatingForm {...props} />;
            }} exact={true} />
            <Route path="/GroupForm" render={(props) => {
              setSelectedPage(props.match.params.name);
              return <GroupForm {...props} />;
              }} exact={true} />
            <Route path="/offcampus" render={(props) => {
              setSelectedPage(props.match.params.name);
              return <OffCampus {...props} />;
              }} exact={true} />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
