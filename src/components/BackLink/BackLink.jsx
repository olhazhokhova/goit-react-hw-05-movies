import s from './BackLink.module.css';
import { Link, useLocation } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackLink = () => { 
    const location = useLocation();
    return (
            <Link to={location?.state?.from ?? '/movies'} className={s.back}><BsArrowLeft />Back</Link>
        )
}

export default BackLink;