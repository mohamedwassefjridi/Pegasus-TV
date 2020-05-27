import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface Channel {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
}

const channels: Channel[] = [
    {
        title: 'Inbox',
        url: '/page/Inbox',
        iosIcon: mailOutline,
        mdIcon: mailSharp
    },
    {
        title: 'Outbox',
        url: '/page/Outbox',
        iosIcon: paperPlaneOutline,
        mdIcon: paperPlaneSharp
    },
    {
        title: 'Favorites',
        url: '/page/Favorites',
        iosIcon: heartOutline,
        mdIcon: heartSharp
    },
    {
        title: 'Archived',
        url: '/page/Archived',
        iosIcon: archiveOutline,
        mdIcon: archiveSharp
    },
    {
        title: 'Trash',
        url: '/page/Trash',
        iosIcon: trashOutline,
        mdIcon: trashSharp
    },
    {
        title: 'Spam',
        url: '/page/Spam',
        iosIcon: warningOutline,
        mdIcon: warningSharp
    }
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
    const location = useLocation();

    return (
        <IonMenu contentId="main" type="overlay">
            <IonContent>
                <div className="content-side content-side-full">
                    <ul className="nav-main">
                        <li>
                            <a href="be_pages_dashboard.html" style={{ verticalAlign: "middle" }} className="d-flex">
                                <img src="assets/images/dreikotv.png" className="h-25 w-25" />
                                <h3 className="sidebar-mini-hide font-w400 mt-15 ml-10">DreikoTV</h3>
                            </a>
                        </li>

                        <li>
                            <a href="be_pages_dashboard.html" style={{ verticalAlign: "middle" }} className="d-flex">
                                <img src="assets/images/k1live.png" className="h-25 w-25" />
                                <h3 className="sidebar-mini-hide font-w400 mt-15 ml-10">K1Live</h3>
                            </a>
                        </li>


                    </ul>
                </div>

            </IonContent>
        </IonMenu>
    );
};

export default Menu;
