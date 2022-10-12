import styles from './Sidebar.module.scss'
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {getEntrance} from "../../selectors/selectors";
import {checkIn} from "../../redux/sidebarSlice/sidebarSlice";

const Sidebar = ()=> {

    const dispatch = useDispatch()
    const entrance = useSelector(state=>getEntrance(state))

    const {reset,register,handleSubmit,formState:{errors}}=useForm()
    const onSubmit = data => {
        dispatch(checkIn(data))
        reset()
    }
    return (
        <div className={styles.card}>
            <p>Login</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('email')} placeholder={'email'}/>
                <input type="password" {...register('password')} placeholder={'password'}/>
                <button type={'submit'}>Send</button>
            </form>
        </div>
    )
}

export default Sidebar