import ThemeContext from './ThemeContext';
import {useState} from 'react';


const ThemeState = ({children})=> {

    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark'): setTheme('light')
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeState