import './App.scss';
import Header from './components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import Main from './components/Main /Main';
import Films from './components/Films/Films';
import Series from './components/Series/Series';
import Sidebar from './components/Sidebar/Sidebar';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='app-wrapper'>
        <Header/>
        <Sidebar/>
        <Routes>
            <Route path='/main' element={<Main/>}/>
            <Route path='/films' element={<Films/>}/>
            <Route path='/series' element={<Series/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
