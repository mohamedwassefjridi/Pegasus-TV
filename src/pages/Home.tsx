import { IonContent, IonHeader, IonPage, IonToolbar, IonButtons, IonMenuButton } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useParams } from 'react-router';

interface Channel {
  url: string;
  icon: string;
  name: string;
}

interface ContainerProps {
  channel: Channel;
}

const Home: React.FC<ContainerProps> = ({ channel }) => {
  

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
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <ExploreContainer channel={channel} />
      </IonContent>
    </IonPage>

  );
};

export default Home;
