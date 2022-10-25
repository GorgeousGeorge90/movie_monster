import styles from './MovieDescription.module.scss';

const MovieDescription = ({poster,info,title,release})=>{
    return (
        <div className={styles.card}>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt="pic"/>
            </div>
            <div className={styles.info}>
                <span style={{fontWeight: 'bold'}}>{title}</span>
                <span style={{opacity: 0.7}}>{info}</span>
                <span style={{fontWeight: 'bold'}}>Release date:{release}</span>
            </div>
        </div>
    )
}

export default MovieDescription