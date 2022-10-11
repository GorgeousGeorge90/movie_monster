import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {addPost} from '../../redux/contactsSllice/contactsSlice';
import {getPosts} from '../../selectors/mainSelectors';
import Post from './Post/Post';
import styles from './Contacts.module.scss'
import {useEffect} from "react";

const Contacts = ()=> {

    const dispatch = useDispatch()
    const posts = useSelector(state=>getPosts(state))
    useEffect(()=>{
        localStorage.setItem('posts', JSON.stringify(posts))
    },[posts])

    const {register,handleSubmit,reset, formState:{errors}}=useForm()
    const onSubmit = data => {
        dispatch(addPost(data))
        reset()
    }
    return (
        <div className={styles.content}>
            <h1>Contacts</h1>
            <hr/>
            <div className={styles.form}>
                <h3>We need your review!</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>
                    <input type="text" {...register('name')} placeholder={'your name'}/>
                </p>
                <p>
                    <textarea type="text" {...register('review')}/>
                </p>
                <p>
                    <button type={"submit"}>Send</button>
                </p>
            </form>
            </div>
            <div>
                {
                    (!posts ?  null: posts.map(post=> <Post key={post.id} post={post}/>))
                }
            </div>
        </div>
    )
}

export default Contacts