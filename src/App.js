import './App.css';
import {Routes,Route} from 'react-router-dom';
import Detail from './Pages/Detail';
import 'animate.css';
import Accueil from './Pages/Accueil';
import LogPage from './components/LogPage';
import SearchingPage from './Pages/SearchingPage';
import Login from './components/Login';



export default function App() {
  return (

    <Routes>
    <Route path="/Accueil" element={<Accueil/>}/>
    <Route path='/detail/:id' element={<Detail/>} />
    <Route path='/' element={<LogPage/>}/>
    <Route path='/searching' element={<SearchingPage/>}/>
    <Route path='/login' element={<Login/>}/>

  </Routes>
  );
}

