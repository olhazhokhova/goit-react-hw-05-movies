
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import s from './MovieDetailsPage.module.css';
import { fetchMovieById } from '../../services/api';

import defaultImage from '../../images/no_photo.jpg';
import MovieAdditionalInfo from './MovieAdditionalInfo';
import BackLink from '../BackLink';

const MovieDetailsPage = () => {
    const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetchMovieById(movieId).then(data => setMovie(data)).finally();
    }, [movieId]);

    const { title, release_date, vote_average, overview, genres, poster_path } = movie;
    return (
        <>
            <BackLink />
            {movie &&
                <div className={s.movie}>
                    <div className={s.movieInfo}>
                        <div className={s.imgWrap}>
                            <img src={`${poster_path === null ? defaultImage : POSTER_URL + poster_path}`} alt={title} className={s.img} />
                        </div>
                        <div>
                            <h1 className={s.heading}>{title} ({new Date(release_date).getFullYear()})
                            </h1>
                            <p>User score: {vote_average * 10}%</p>
                            <h2 className={s.title}>Overview</h2>
                            <p>{overview}</p>
                            {
                                genres && genres.length > 0 &&
                                <>
                                    <h2 className={s.title}>Genres</h2>
                                    <ul className={s.genres}>{genres.map(({ id, name }) => <li key={id}>{name}</li>)}</ul>
                                </>
                            }
                        </div>
                    </div>
                    <MovieAdditionalInfo />
                </div>
            }
        </>
    )
}

export default MovieDetailsPage;