import React, { useEffect } from 'react';
import Navbar from './Navbar';
import {Link, useParams} from 'react-router-dom';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';

export default function Detail () {

  const dispatch = useDispatch();
  const article = useSelector(state=>state.categoryReducer.article);
  let id = useParams().id

    // useEffect(() => {
    //   fetch('http://127.0.0.1:8080/newarrivage')
    //   .then((res)=>res.json())
    //   .then((newArrivages)=>{dispatch(getNew(newArrivages))
    //   })
    //   .catch(e => { console.log(e)})
    //   }, [])
      
            
    return (
     <div>
        <Navbar/>
        <div className='container'>

         
        </div>
        <Footer/>
     </div>
    );
}

