import {NavLink} from 'react-router-dom';
import styles from './Header.module.scss'
import {useDispatch, useSelector} from 'react-redux';
import {getCheck, getEntrance} from '../../selectors/selectors';
import {logOut} from '../../redux/sidebarSlice/sidebarSlice';
import logo from './../../assets/img/star.png';
import {findAllByDisplayValue} from "@testing-library/react";


const Header = ()=> {
    const checked = useSelector(state=>getCheck(state))
    const dispatch = useDispatch()
    const setActive = ({isActive}) => ({color: isActive ? 'darkorange': 'white'})

    return (
        <header className={styles.content}>
            <div className={styles.title}>
                <h1>MovieMonster</h1>
                <p>It's all about movies!</p>
            </div>
            <nav>
                <ul>
                    <li><NavLink style={setActive} to='/main'>Main</NavLink></li>
                    <li><NavLink style={setActive} to='/films'>Movies</NavLink></li>
                    <li><NavLink style={setActive} to='/series'>TV series</NavLink></li>
                    <li><NavLink style={setActive} to='/contacts'>Contacts</NavLink></li>
                </ul>
                <div className={styles.logo}>
                    {
                        !checked ? null:
                            <div className={styles.hide}>
                                <img src={logo} alt="logo"/>
                                <button onClick={()=>dispatch(logOut())}>Exit</button>
                            </div>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Header