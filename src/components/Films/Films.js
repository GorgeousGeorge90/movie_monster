import {useSelector} from "react-redux";
import {getNewFilms} from '../../selectors/mainSelectors';
import Preloader from '../common/Preloader/Preloader';
import MovieDescription from "./MovieDescription/MovieDescription";


const Films = ()=> {
    const films = useSelector(state=>getNewFilms(state))

    if (!films) {
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

