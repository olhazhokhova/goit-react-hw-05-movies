
import { Link, Outlet, useLocation } from 'react-router-dom';
import s from './MovieDetailsPage.module.css';

const MovieAdditionalInfo = () => {  
    
    const location = useLocation();

    return (
        <div className={s.additional}>
            <h2>Additional information</h2>
            <ul className={s.unstyled}>
                <li>
                    <Link to="cast" state={{ from: location.state.from}} className={s.link} >Cast</Link>
                </li>
                <li>
                    <Link to="reviews" state={{ from: location.state.from}} className={s.link} >Reviews</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export default MovieAdditionalInfo;