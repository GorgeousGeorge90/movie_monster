import {useDispatch, useSelector} from 'react-redux';
import {getNewFilms} from '../../selectors/mainSelectors';
import {useEffect} from "react";
import {addMovie} from '../../redux/mainSlice/mainSlice';
import Preloader from '../common/Preloader/Preloader';
import OneFilm from "./OneFilm/OneFilm";
import styles from './Main.module.scss';

const Main = ()=> {

    const films = useSelector(state=>getNewFilms(state))
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(addMovie())
    }, [])

    if (!films) {
        return <Preloader/>
    }

    return (
        <div className={styles.content}>
            <div className={styles.films_info}>
                <h1>New films</h1>
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
                <hr/>
            </div>
                <h1>New TV series</h1>
                <h1>News</h1>
            </div>
            )
}

export default Main