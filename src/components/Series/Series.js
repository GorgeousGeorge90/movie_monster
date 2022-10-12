import {useSelector} from 'react-redux';
import {getNewFilms, getSomeSeries} from '../../selectors/selectors';
import Preloader from '../common/Preloader/Preloader';
import MovieDescription from "../Films/MovieDescription/MovieDescription";



const Series = ()=> {
    const series = useSelector(state=>getSomeSeries(state))
    console.log(series)

    if (!series) {
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