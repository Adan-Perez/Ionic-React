import {
    IonAlert,
    IonButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useState } from 'react';
import { add, trash } from 'ionicons/icons';

const Home: React.FC = () => {
    const [userName, setUserName] = useState('desconocido');

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse='condense'>
                    <IonToolbar>
                        <IonTitle size='large' className='ion-text-center'>
                            Home
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>

                <ExploreContainer name={userName} />

                <IonButton
                    className='ion-color-primary'
                    id='rename-alert'
                    style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
                    <IonIcon icon={add} slot='icon-only' />
                </IonButton>

                <IonButton
                    color='danger'
                    onClick={() => setUserName('desconocido')}
                    style={{ position: 'fixed', bottom: '20px', left: '20px' }}>
                    <IonIcon icon={trash} slot='icon-only' />
                </IonButton>
                {/* Alert para agregar nombre */}
                <IonAlert
                    trigger='rename-alert'
                    header='¿Cómo te llamas?'
                    buttons={['OK']}
                    inputs={[
                        {
                            placeholder: 'Nombre',
                        },
                    ]}
                    onDidDismiss={(e) =>
                        setUserName(e.detail.data.values[0] || 'desconocido')
                    }></IonAlert>
            </IonContent>
        </IonPage>
    );
};

export default Home;
