
import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

import s from './MovieDetailsPage.module.css';
import { fetchMovieById } from '../../services/api';
import Loader from '../Loader';
import defaultImage from '../../images/no_photo.jpg';

const MovieDetailsPage = () => {
    const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);
    
    const location = useLocation();

    useEffect(() => {
        fetchMovieById(movieId).then(data => setMovie(data)).finally();
    }, [movieId]);

    const { title, release_date, vote_average, overview, genres, poster_path } = movie;
    return (
        <>
            <Link to={location?.state?.from ?? '/movies'} className={s.back}><BsArrowLeft />Back</Link>
            {movie &&
                <div className={s.movie}>
                    <div className={s.movieInfo}>
                        <div className={s.imgWrap}>
                            {
                                poster_path ? 
                                    <img src={`${poster_path ? POSTER_URL + poster_path : defaultImage}`} alt={title} className={s.img} />
                                    :
                                    <Loader />

                            }
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
                    <div className={s.additional}>
                        <h2>Additional information</h2>
                        <ul className={s.unstyled}>
                            <li>
                                <Link to="cast" state={{ from: location }} className={s.link} >Cast</Link>
                            </li>
                            <li>
                                <Link to="reviews" state={{ from: location }} className={s.link} >Reviews</Link>
                            </li>
                        </ul>
                        <Outlet />
                    </div>
                </div>
            }
        </>
    )
}

export default MovieDetailsPage;