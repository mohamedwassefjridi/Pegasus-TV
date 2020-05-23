import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div id="page-container" className="sidebar-inverse side-scroll main-content-boxed">

          <ExploreContainer />

        </div>
      </IonContent>
    </IonPage>

  );
};

export default Home;
