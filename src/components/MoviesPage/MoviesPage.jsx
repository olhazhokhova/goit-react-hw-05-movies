import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import s from './MoviesPage.module.css';
import { fetchMoviesByQuery } from '../../services/api';
import Loader from '../Loader';

const MoviesPage = () => {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [inputValue, setInputValue] = useState('');
    const location = useLocation();

    const query = searchParams.get('query');

    useEffect(() => {
        setNotFound(false);
        query && query.length > 0 && fetchMoviesByQuery(query).then(data => {
            setMovies(data.results);
            data.total_results === 0 && setNotFound(true);
        }).finally(() => {
            setIsLoading(false);
        })
    }, [query])

    const onSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setSearchParams({ query: e.currentTarget.elements.query.value });
        setInputValue('');
    }

    const onInputChange = (e) => {
        setInputValue(e.currentTarget.value); 
    }

    return (
        <>
            <form className={s.form} onSubmit={onSubmit}>
                <input type="text" className={s.input} name="query" value={inputValue} onChange={onInputChange}/>
                <button className={s.button} disabled={inputValue.length === 0}>Search</button>
            </form>
            {isLoading && <Loader />}
            {!isLoading && movies.length > 0 &&
                <ul className={s.unstyled}>
                    {
                        movies.map(({id, title, original_name}) => {
                            return (
                                <li key={id}>
                                    <Link to={`/movies/${id}`} state={{ from: location}} className={s.link} >{ title ? title : original_name }</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            }
            {
                !isLoading && notFound &&  <div className={s.notFound}>Movies with query {searchParams.get('query')} not found</div>
            }
            
        </>
    )
}

export default MoviesPage;