import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import NavLogin from '../components/NavLogin';
import Notif from '../components/Notif';


function Navbar ({}) {
  const [nav , setNav] = useState(false);
  const [display,setDisplay]=useState(false);
  const [notif,setNotif]=useState(false)


    const openLog = ()=>{
      setNav(true)
    }
  const showMenu = () =>{
    setDisplay(true)
}
const afficher = ()=> {
  setDisplay (false)
}

  const showNotifications = () => {
    setNotif(true)
  }
    return (
      <div>
      <header>

        <div className='navbar'>
          <div className="navbar--left">
          <div className='icon--menu' onClick={showMenu}>
               <i className="fa-solid fa-bars"></i>
               </div>
               <div className="navbar--logo">
              <img src="https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/0/3/0/030dc01da7_50145928_netflix-logo.jpg" alt="" />
            </div>
          </div>
          <div className="navbar--center">
            <div className="navbar--center--content">
            <Link className='liste' to="/Accueil">Accueil</Link>
              <Link className='liste' to='/Accueil'> Séries</Link>
              <Link className='liste' to='/Accueil'> Films </Link>
              <Link className='liste' to='/Accueil'>Nouveautés</Link>
              <Link className='liste' to='/Accueil'> Ma liste</Link>
            </div>
          </div>

        
          <div className="navbar--right">
          <div className="navbar--right--content">
                          <div className='nav--items'>
                            <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <div className='nav--items'>
                              <i class="fa-solid fa-bell" onClick={showNotifications}></i>
                            </div>
                            <Notif notif={notif} setNotif={setNotif}/>
                       <NavLogin nav={nav} setNav={setNav}/>
                       <div className='profil'>
                          <div className='profil__content'>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7q6Xxz10aPOmWfZPZMZGaXMpAV2MVFjTM0zZrCdBadCQIvfN_o597iR2LeDRZubFAxY&usqp=CAU" alt="" onMouseOver={openLog}/>
                          </div>
                            {/* <button onMouseOver={openLog} className="btn--connexion"> Mon profil </button> */}
                       </div>
                  </div>
          </div>
         </div>

        <div className={display ? "menu show--menu" : "menu"}>
                    <div className='sidebar--menu' onClick={afficher}>
                        <div className='btn--close--sidebar'>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                        <div className='menu__content'>
                          <div className='menu__content__liste'>
                            <Link className='liste' to="/">Accueil</Link>
                          </div>
                        </div>
                        </div>
        </div>

    </header>

              </div>
    );
}

export default Navbar;
