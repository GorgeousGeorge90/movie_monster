import styles from './Post.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {deleteOldPost, updatePost} from '../../../redux/contactsSllice/contactsSlice';
import {getPostsIsFetching} from '../../../selectors/selectors';
import Preloader from '../../common/Preloader/Preloader';


const Post = (props)=> {
    const {name,review,likes,id} = props.post
    const isFetching = useSelector(state=>getPostsIsFetching(state))
    const dispatch = useDispatch()

    const data = {
        id,likes
    }

    if (isFetching) {
        return <Preloader/>
    }

    return (
        <div className={styles.card}>
            <span><img src={'https://freesvg.org/img/black_avatar_2.png'} alt="logo"/></span>
            <span className={styles.name}>{name}:</span>
            <span style={{margin:'auto 2px'}}>{review}</span>
            <span className={styles.likes} onClick={()=>dispatch(updatePost(data))}>&#129505;
               <sub>{likes}</sub>
            </span>
            <span style={{margin:'auto 5px'}} onClick={()=>dispatch(deleteOldPost(id))}>&#128465;</span>
        </div>
    )
}

export default Post