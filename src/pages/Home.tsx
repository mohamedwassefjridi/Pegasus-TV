import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonImg, IonGrid, IonRow, IonCol, IonNav, IonButton, IonIcon, IonMenuButton } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className="content-header">
            <div className="content-header-section d-flex" style={{ verticalAlign: "middle" }}>
              <img className="h-25 w-25 mt-15" src="assets/icon/favicon.png"></img>
              <h1 className="font-w300 mt-15 ml-10">PegasusTV</h1>
            </div>
          </div>
          <IonButtons slot="end">
            <IonMenuButton/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <ExploreContainer />
      </IonContent>
    </IonPage>

  );
};

export default Home;
