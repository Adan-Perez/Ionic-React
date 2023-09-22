import {
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardTitle,
    IonCol,
    IonContent,
    IonFooter,
    IonGrid,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonModal,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { MoviesInterface } from '../lib/Interfaces';
import { search } from 'ionicons/icons';
import moviesData from '../assets/movies.json';

const Movies: React.FC = () => {
    const moviesJson = moviesData as MoviesInterface[];

    const apiKey = 'ed2eedbb64051005e858f661eb06c553';
    const TMDB_URL = 'https://api.themoviedb.org/3';
    const imgPath = 'https://image.tmdb.org/t/p/original';

    const [movies, setMovies] = useState<MoviesInterface[]>([]);
    const [searchKey, setSearchKey] = useState('');
    const [selectedMovie, setSelectedMovie] = useState({} as MoviesInterface);
    const [ifDisabled, setInputDisabled] = useState(false);

    const fetchMovies = async () => {
        setInputDisabled(false);
        const type = searchKey ? 'search' : 'discover';
        try {
            const { data } = await axios.get(`${TMDB_URL}/${type}/movie`, {
                params: {
                    api_key: apiKey,
                    query: searchKey,
                },
            });
            setMovies(data.results);
            setSelectedMovie(data.results[0]);
        } catch (error) {
            console.error('Error fetching movies:', error);
            setInputDisabled(true);
            setMovies(moviesJson);
        }
    };

    const searchMovies = (e: any) => {
        e.preventDefault();
        fetchMovies();
    };

    useEffect(() => {
        fetchMovies();
    }, [searchKey]);

    const [isOpen, setIsOpen] = useState(false);

    const openModal = (movie: MoviesInterface) => {
        setSelectedMovie(movie);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Películas</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse='condense'>
                    <IonToolbar>
                        <IonTitle size='large' className='ion-text-center'>
                            Películas
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    {/* Buscador */}
                    <IonGrid>
                        <IonRow>
                            <IonCol size='9'>
                                <IonItem className='ion-margin-top'>
                                    <form onSubmit={searchMovies}>
                                        <IonInput
                                            type='text'
                                            placeholder='Busca una película...'
                                            value={searchKey}
                                            onIonChange={(e) =>
                                                setSearchKey(
                                                    e.detail.value as string
                                                )
                                            }
                                            disabled={ifDisabled}
                                        />
                                    </form>
                                </IonItem>
                            </IonCol>
                            <IonCol size='3' className='ion-text-center'>
                                <IonButton
                                    type='submit'
                                    expand='full'
                                    fill='clear'
                                    onClick={searchMovies}
                                    disabled={ifDisabled}>
                                    <IonIcon aria-hidden='true' icon={search} />
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>

                    {/* Películas */}
                    <IonGrid>
                        <div className='container-fluid'>
                            <div className='row'>
                                {movies.map((movie) => (
                                    <div key={movie.id} className='col-md-4 mb-3'>
                                        <IonCard
                                            onClick={() => {
                                                openModal(movie as MoviesInterface);
                                            }}>
                                            <div
                                                className='card pb-2'
                                                onClick={() => {
                                                    setSelectedMovie(
                                                        movie as MoviesInterface
                                                    );
                                                }}>
                                                <img
                                                    src={`${
                                                        imgPath + movie.poster_path
                                                    }`}
                                                    className='card-img-top'
                                                    alt={movie.title}
                                                />

                                                <div className='card-body'>
                                                    <IonCardTitle>
                                                        <h5 className='card-title text-center'>
                                                            {movie.title}
                                                        </h5>
                                                    </IonCardTitle>
                                                </div>
                                            </div>
                                        </IonCard>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </IonGrid>
                    {/* Modal */}
                    <IonModal isOpen={isOpen} onDidDismiss={() => setIsOpen(false)}>
                        <IonHeader>
                            <IonToolbar>
                                <IonTitle>{selectedMovie.title}</IonTitle>
                            </IonToolbar>
                        </IonHeader>
                        <IonContent>
                            <IonCard>
                                <div
                                    style={{
                                        maxWidth: '80%',
                                        maxHeight: '60vh',
                                        overflow: 'hidden',
                                        margin: '0 auto',
                                    }}>
                                    <img
                                        src={`${
                                            imgPath + selectedMovie.poster_path
                                        }`}
                                        alt={selectedMovie.title}
                                        className='img-fluid'
                                    />
                                </div>
                                <IonCardContent>
                                    <h2>{selectedMovie.title}</h2>
                                    <p>{selectedMovie.overview}</p>
                                </IonCardContent>
                            </IonCard>
                        </IonContent>
                        <IonFooter>
                            <IonToolbar>
                                <IonButtons slot='end'>
                                    <IonButton onClick={closeModal}>
                                        Cerrar
                                    </IonButton>
                                </IonButtons>
                            </IonToolbar>
                        </IonFooter>
                    </IonModal>
                </IonContent>
            </IonContent>
        </IonPage>
    );
};

export default Movies;
