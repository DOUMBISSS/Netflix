import React, { useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function NavLogin ({nav,setNav}) {

  const navigate = useNavigate();
  
  const closeNav = ()=>{
    setNav(false)
  }
  const logout =()=>{
    navigate('/login');
  }


  return (
    <div>
            <div className={nav ? "log__part open__log__part" : "log__part"}>
                                <div className="btn--close--part">
                                    <p>Mon compte</p>
                                    <i className="fa-solid fa-xmark" onClick={closeNav}></i>
                                </div>

                              <div className="user__part">
                                {/* <p className='na'><i class="fa-solid fa-user"></i>  {JSON.parse(auth).email}</p> */}
                              </div>
                              <div className="user__part">
                                <div className="user__part__detail">
                                <div className="user__part__left">
                                   <div className="user__part__left__img">
                                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7q6Xxz10aPOmWfZPZMZGaXMpAV2MVFjTM0zZrCdBadCQIvfN_o597iR2LeDRZubFAxY&usqp=CAU" alt="" />
                                   </div>
                                </div>
                                <div className="user__part__right">
                                  <p className='na'><i class="fa-solid fa-user"></i> Koudou</p>
                                </div>
                                </div>
                              </div>
                            <div className="user__part">
                              <Link to='/Accueil' className='na'> <i class="fa-solid fa-pen"></i> Gérer les profils</Link>
                            </div>

                            <div className="user__part">
                              <Link to='/Accueil' className='na'> <i class="fa-solid fa-user"></i> Transférer un profil</Link>
                            </div>

                            <div className="user__part">
                              <Link to='/Accueil' className='na'> <i class="fa-solid fa-user"></i> Compte</Link>
                            </div>

                            <div className="user__part">
                              <Link to='/Accueil' className='na'> <i class="fa-solid fa-circle-info"></i> Centre d'aide</Link>
                            </div>
                            <Link to='/login'><button className="btn--log" onClick={logout}><i class="fa-solid fa-right-from-bracket"></i> Logout</button></Link>
             </div>
        
        </div>
  )
}