import styles from './Sidebar.module.scss'
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {getCheck, getEntrance} from "../../selectors/selectors";
import {checkIn} from "../../redux/sidebarSlice/sidebarSlice";
import {loginSchema} from "../../validations/validators";
import { yupResolver } from '@hookform/resolvers/yup';
import {useEffect} from "react";

const Sidebar = ()=> {

    const dispatch = useDispatch()
    const entrance = useSelector(state=>getEntrance(state))
    const checked = useSelector(state=>getCheck(state))


    const {reset,register,handleSubmit,formState:{errors}}=useForm({
        resolver: yupResolver(loginSchema),
    })
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
                <button type={'submit'} disabled={ checked ? true: null}>Send</button>
            </form>
        </div>
    )
}

export default Sidebar