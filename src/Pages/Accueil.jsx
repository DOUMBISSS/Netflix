import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import 'animate.css';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import Marquee from "react-fast-marquee";

export default function Accueil () {
    const dispatch = useDispatch()
  const [display,setDisplay]= useState(false);

  const [cart,setCart]= useState(false);

  const closeCart = ()=> {
    setCart (false)
}
const showCart =()=>{
    setCart (true)
}

    return (
        <div>
               <Navbar/>
               <div className='hero--static--image'>

               </div>
               <div className='slider__part'>

                </div>
        </div>

    );
}

