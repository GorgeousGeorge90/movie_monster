import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {addPost} from '../../redux/contactsSllice/contactsSlice';
import {getPosts} from '../../selectors/mainSelectors';


const Contacts = ()=> {

    const dispatch = useDispatch()
    const posts = useSelector(state=>getPosts(state))

    const {register,handleSubmit,reset, formState:{errors}}=useForm()
    const onSubmit = data => {
        dispatch(addPost(data))
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name</label>
                    <input type="text" {...register('name')}/>
                <label>Review</label>
                    <input type="text" {...register('review')} />
                <button type={"submit"}>Send</button>
            </form>
            <div>
                {
                    !posts ? `Don't have any reviews!` : null
                    })
                }
            </div>
        </div>
    )
}

export default Contacts