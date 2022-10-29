import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {addNewPost, getAllPosts} from '../../redux/contactsSlice';
import {getCheck, getPosts} from '../../selectors/selectors';
import Post from './Post/Post';
import styles from './Contacts.module.scss'
import {yupResolver} from '@hookform/resolvers/yup';
import {reviewSchema} from '../../validations/validators';
import {useEffect} from 'react';
import Preloader from "../common/Preloader/Preloader";

const Contacts = ()=> {

    const dispatch = useDispatch()
    const posts = useSelector(state=>getPosts(state))
    const checked = useSelector(state=>getCheck(state))

    useEffect(()=>{
        dispatch(getAllPosts())
        console.log(posts)
    },[])

    const {register,handleSubmit,reset, formState:{errors}}=useForm({
        resolver: yupResolver(reviewSchema)
    })
    const onSubmit = data => {
        dispatch(addNewPost(data))
        reset()
    }

    const errorStyle = {
        color: 'red',
        fontWeight: 'bolder',
        fontSize: '1.2em',
    }

    if (!posts) {
        return <Preloader/>
    }


    return (
        <div className={styles.content}>
            <div className={styles.form}>
                <h1>We need your review!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>
                    <input type="text" {...register('name')} placeholder={'your name'}/>
                </p>
                    {errors.name ? <span style={errorStyle}>{errors.name.message}</span>: null}
                <p>
                    <textarea type="text" {...register('review')}/>
                </p>
                    {errors.review ? <span style={errorStyle}>{errors.review.message}</span>: null}
                <p>
                    <button type={"submit"} disabled={!checked}>Send</button>
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