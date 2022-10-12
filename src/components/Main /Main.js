import {useDispatch, useSelector} from 'react-redux';
import {getNewFilms, getNews, getSomeSeries} from '../../selectors/selectors';
import {useEffect} from "react";
import {addMovie, addNewSeries} from '../../redux/mainSlice/mainSlice';
import Preloader from '../common/Preloader/Preloader';
import OneFilm from "./OneFilm/OneFilm";
import styles from './Main.module.scss';

const Main = ()=> {

    const films = useSelector(state=>getNewFilms(state))
    const series = useSelector(state=>getSomeSeries(state))
    const news = useSelector(state=>getNews(state))
    const dispatch = useDispatch()
    console.log(news)

    useEffect(()=>{
        dispatch(addMovie())
        dispatch(addNewSeries())
    }, [])

    if (!films) {
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
                <h1>News</h1>
            </div>
            )
}

export default Main