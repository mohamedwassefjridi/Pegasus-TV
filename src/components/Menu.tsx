import {
    IonContent,
    IonMenu,
    IonItem,
} from '@ionic/react';

import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

interface Channel {
    url: string;
    icon: string;
    name: string;
}

const channels: Channel[] = [
    {
        name: 'DreikoTV',
        url: 'https://usb.bozztv.com/ssh101/dreikotv/dreikotv/playlist.m3u8',
        icon: "assets/images/dreikotv.png",
    },
    {
        name: 'K1Live',
        url: 'https://usb.bozztv.com/ssh101/k1live/k1live/playlist.m3u8',
        icon: "assets/images/k1live.png",
    }
];


const Menu: React.FC = () => {
    return (
        <IonMenu contentId="main" type="overlay">
            <IonContent>
                <div className="content-side content-side-full">
                    <ul className="nav-main">
                        {channels.map((channel) => {
                            return (
                                <li key={channel.name}>
                                    <Link to={{ pathname: '/', state: { channel } }} className="d-flex h-auto w-auto p-10" style={{ verticalAlign: "middle" }} >
                                        <img src={channel.icon} className="h-100 w-25" />
                                        <h3 className="sidebar-mini-hide font-w400 mt-15 ml-10">{channel.name}</h3>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

            </IonContent>
        </IonMenu>
    );
};

export default Menu;
