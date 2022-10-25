import {useSelector} from 'react-redux';
import {getCheck, getMainIsFetching, getSomeSeries} from '../../selectors/selectors';
import Preloader from '../common/Preloader/Preloader';
import MovieDescription from '../Films/MovieDescription/MovieDescription';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';



const Series = ()=> {
    const series = useSelector(state=>getSomeSeries(state))
    const checked = useSelector(state=>getCheck(state))
    const isFetching = useSelector(state=>getMainIsFetching(state))
    const navigate = useNavigate()

    useEffect(()=> {
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
                series.map(film=> <MovieDescription key={film.id}
                                                    title={film.name}
                                                    poster={film.poster_path}
                                                    info={film.overview}
                                                    release={film.first_air_date}
                />)
            }
        </div>
    )
}

export default Series