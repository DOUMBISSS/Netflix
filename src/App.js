import './App.css';
import {Routes,Route} from 'react-router-dom';
import Contact from './Pages/Contact';
import Detail from './Pages/Detail';
import 'animate.css';
import Formulaire from './Pages/Formulaire';
import Accueil from './Pages/Accueil';
import LogPage from './components/LogPage';
import UserDetails from './components/UserDetails';
import SearchingPage from './Pages/SearchingPage';
import Login from './components/Login';



export default function App() {
  return (

    <Routes>
    <Route path="/Accueil" element={<Accueil/>}/>
    <Route path='/contact' element={<Contact/>} />
    <Route path='/formulaire' element={<Formulaire/>} />
    <Route path='/detail/:id' element={<Detail/>} />
    <Route path='/' element={<LogPage/>}/>
    <Route path='/userDetail' element={<UserDetails/>}/>
    <Route path='/searching' element={<SearchingPage/>}/>
    <Route path='/login' element={<Login/>}/>

  </Routes>
  );
}

