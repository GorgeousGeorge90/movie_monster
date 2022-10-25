import {useSelector} from 'react-redux';
import {getCheck, getMainIsFetching, getNewFilms} from '../../selectors/selectors';
import Preloader from '../common/Preloader/Preloader';
import MovieDescription from './MovieDescription/MovieDescription';
import {useNavigate} from 'react-router-dom';
import {useEffect} from "react";


const Films = ()=> {
    const films = useSelector(state=>getNewFilms(state))
    const checked = useSelector(state=>getCheck(state))
    const isFetching = useSelector(state=>getMainIsFetching(state))
    const navigate = useNavigate()

    useEffect(()=>{
        if (!checked) {
            navigate('/main')
        }
    },[checked])

    if (isFetching) {
        return <Preloader/>
    }

    return (
        <div>
            {
                films.map(film=> <MovieDescription key={film.id}
                                                   title={film.title}
                                                   poster={film.poster_path}
                                                   info={film.overview}
                                                   release={film.release_date}
                />)
            }
        </div>
    )
}

export default Films

