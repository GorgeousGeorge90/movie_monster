import {NavLink} from 'react-router-dom';
import styles from './Header.module.scss'


const Header = ()=>{
    return (
        <header className={styles.content}>
            <div className={styles.title}>
                <h1>MovieMonster</h1>
                <p>Movies are our desire!</p>
            </div>
            <nav>
                <ul>
                    <li><NavLink to='/main'>Main</NavLink></li>
                    <li><NavLink to='/films'>Movies</NavLink></li>
                    <li><NavLink to='/series'>TV series</NavLink></li>
                    <li><NavLink to='/contacts'>Contacts</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header