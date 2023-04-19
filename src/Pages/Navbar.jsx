import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import NavLogin from '../components/NavLogin';


function Navbar ({search,setSearch}) {
  const [user,setUser] = useState("");
  const [nav , setNav] = useState(false);
  const [cartShop , setCartShop] = useState(false);
  const [display,setDisplay]=useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const carts = useSelector(state => state.cartReducer.carts)

    const openLog = ()=>{
      setNav(true)
    }

    const showCart =()=>{
      setCartShop (true)
  }

  const showProfil =()=>{
    setDisplay(true)
  }
  const closeProfil =()=>{
    setDisplay(false)
  }
  const showMenu = () =>{
    setDisplay(true)
}
const affi = ()=> {
  setDisplay (false)
}

  const logout =()=>{
    localStorage.clear();
    navigate('/');
  }
  const auth = localStorage.getItem("user");

  const handleSearch = (e)=>{
    setSearch(e.target.value)
  }
  const searching =(e)=>{
    navigate('/searching');
    setSearch(e.target.value)
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
              {/* <Link to="/"> <img src={`${process.env.PUBLIC_URL}/easy.png`} alt=""/></Link> */}
              <img src="https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/0/3/0/030dc01da7_50145928_netflix-logo.jpg" alt="" />
            </div>
          </div>
          <div className="navbar--center">
            <div className="navbar--center--content">
            <Link className='liste' to="/">Accueil</Link>
              <Link className='liste' to='/restaurant'> Séries</Link>
              <Link className='liste' to='/chambres'> Films </Link>
              <Link className='liste' to='/piscines'>Nouveautés</Link>
              <Link className='liste' to='/activity'> Ma liste</Link>
              <Link className='liste' to='/contact'> Explorer ma langue</Link>
            </div>
            <div className='logo--resp'>
              <div className="navbar--logo--resp">
                <Link to="/"> <img src={`${process.env.PUBLIC_URL}/easy.png`} alt=""/></Link>
              </div>
            </div>
               
          </div>

        
          <div className="navbar--right">
          <div className="navbar--right--content">
                          <div className='nav--items'>
                            <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <div className='nav--items'>
                              <i class="fa-solid fa-bell"></i>
                            </div>
                       <NavLogin nav={nav} setNav={setNav}/>
                       <Link className='liste' ><button onClick={openLog} className="btn--connexion"><i className="fa-solid fa-user"></i> Mon profil </button></Link>
                  </div>
          </div>
         </div>

        <div className={display ? "menu show--menu" : "menu"}>
                    <div className='sidebar--menu'>
                        <div className='btn--close--sidebar' onClick={affi}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                        <div className='menu__content'>
                          <div className='menu__content__liste'>
                            <Link className='liste' to="/">Accueil</Link>
                          </div>
                          <div className='menu__content__liste'>
                            <Link className='liste' to='/men'> Homme</Link>
                          </div>
                          <div className='menu__content__liste'>
                            <Link className='liste' to='/women'> Femme</Link>
                          </div>
                            <div className='menu__content__liste'>
                            <Link className='liste' to='/child'>Enfant</Link>
                            </div>
                            <div className='menu__content__liste'>
                            <Link className='liste' to='/accessoires'>Accessoires</Link>
                            </div>
                          <div className="col-12 col-md-12">
                            <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Cherchez un produit , une marque ou une categorie..." aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                          </form>
                          </div>
                        </div>
                        </div>
        </div>

    </header>

              </div>
    );
}

export default Navbar;
