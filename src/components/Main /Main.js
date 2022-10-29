import {useDispatch, useSelector} from 'react-redux';
import {getMainIsFetching, getNewFilms, getSomeSeries} from '../../selectors/selectors';
import {useEffect} from 'react';
import {getFilms, getSeries} from '../../redux/mainSlice';
import Preloader from '../common/Preloader/Preloader';
import OneFilm from './OneFilm/OneFilm';
import styles from './Main.module.scss';

const Main = ()=> {

    const films = useSelector(state=>getNewFilms(state))
    const series = useSelector(state=>getSomeSeries(state))
    const isFetching = useSelector(state=>getMainIsFetching(state))
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getFilms())
        dispatch(getSeries())
    }, [dispatch])


    if (isFetching) {
        return <Preloader/>
    }

    return (
        <div className={styles.content}>
            <div className={styles.films_info}>
                <h1>New movies</h1>
                <hr/>
                <div className={styles.films}>
                    {
                        films.map(film => <OneFilm key={film.id}
                                                   title={film.title}
                                                   poster={film.poster_path}
                                                   rating={film.vote_average}
                    />)
                    }
                </div>
                <h1>New TV series</h1>
                <hr/>
                <div className={styles.films}>
                    {
                        series.map(el=> <OneFilm
                                        key={el.id}
                                        title={el.name}
                                        poster={el.poster_path}
                                        rating={el.vote_average}
                        />)
                    }
                </div>
            </div>
        </div>)
}

export default Main