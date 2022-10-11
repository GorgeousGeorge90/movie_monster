import styles from './Post.module.scss';
import {useDispatch} from 'react-redux';
import {addLike} from '../../../redux/contactsSllice/contactsSlice';


const Post = (props)=> {
    const {name,text,likes,id} = props.post
    const dispatch = useDispatch()
    return (
        <div className={styles.card}>
            <span>{text}</span>
            <span>{name}</span>
            <span onClick={()=>dispatch(addLike(id))}>&#129505;
               <sub>{likes}</sub>
             </span>
        </div>
    )
}

export default Post