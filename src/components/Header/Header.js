import {NavLink} from 'react-router-dom';
import styles from './Header.module.scss'
import {useDispatch, useSelector} from 'react-redux';
import {getCheck} from '../../selectors/selectors';
import {logOut} from '../../redux/sidebarSlice';
import ReactSwitch from 'react-switch';
import {useContext} from 'react';
import ThemeContext from '../common/ThemeContext/ThemeContext';




const Header = ()=> {
    const checked = useSelector(state=>getCheck(state))
    const dispatch = useDispatch()
    const setActive = ({isActive}) => ({color: isActive ? 'darkorange': 'white'})
    const {theme,toggleTheme} = useContext(ThemeContext)

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
                    {
                        !checked ? null:
                            <div className={styles.hide}>
                                <button onClick={()=>dispatch(logOut())}>Exit</button>
                            </div>
                    }
            </nav>
            <div className={styles.toggle}>
                <ReactSwitch checked={theme==='dark'} onChange={toggleTheme}/>
            </div>
        </header>
    )
}

export default Header