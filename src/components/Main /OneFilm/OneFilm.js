import styles from './OneFilm.module.scss'

const OneFilm = ({title,poster,rating}) => {

    return (
        <div className={styles.card}>
            <div className={styles.pic}>
                <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt="pic"/>
            </div>
            <div>
                <span>{title}</span>
                <span className={styles.rating}>{rating}</span>
            </div>
        </div>
    )
}

export default OneFilm