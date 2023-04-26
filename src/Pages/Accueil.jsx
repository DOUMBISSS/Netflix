import React, { useState } from 'react';
import 'animate.css';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import Footer from './Footer';
import bgImage from '../video/background.mp4'

export default function Accueil () {
    
  const [display,setDisplay]=useState(false)

  const showDetail = ()=> {
    setDisplay (true)
  }
  const closeDetail = ()=> {
    setDisplay (false)
  }

const Movies = useSelector(state=>state.categoryReducer.Movies);

// const options = {
//     method: 'GET',
//     headers: {
//       'content-type': 'application/octet-stream',
//       'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
//       'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
//     }
//   };


// useEffect(() => {
//     fetch('https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',options
//     )
//     .then((res)=>res.json())
//     .then((Movies)=>{dispatch(getAllmovie(Movies))
//     })
//     .catch(e => { console.log(e)})
//     }, [])

//     console.log(Movies)

    return (
        <div>
               <Navbar/>
               <div className='hero--static--image'>
                    <video autoPlay loop muted>
                        <source src={bgImage}/>
                    </video>
                    <div className='info-meta-layer'>
                        <h1 className='title__movie'>DIDI B - En haut ft Jr Lamelo</h1>
                        {/* <h5 className='supplemental__message'>Regardez Dxdx B maintenant</h5> */}
                        <div className='button__layer'>
                            <button className='btn__play'> <i class="fa-solid fa-play"></i> Lecture</button>
                            <button className='btn__info'> <i class="fa-solid fa-circle-info"></i> infos</button>
                        </div>
                    </div>
               </div>
           <div>
           <div className='slider__part'>
                <h5 className='slider__title'>Ajouts récents</h5>
                        <div className='slider__content'onMouseOut={closeDetail}>
                         {Movies.map((movie) => <div key={movie.id} className='cards' onMouseOver={showDetail}>
                                    <img src={movie.img} alt="" />
                                <div className= "card--body">
                                <h4>{movie.title}</h4>
                                        <div className="button__block">
                                        <div className="button__block__content">
                                        <div className="item__block">
                                            <i class="fa-solid fa-play"></i>
                                            </div>
                                            <div className="item__block">
                                            <i class="fa-solid fa-plus"></i>
                                            </div>
                                            <div className="item__block">
                                            <i class="fa-solid fa-thumbs-up"></i>
                                            </div>
                                        </div>
                                        <div className="button__block__content__right">
                                        <div className="item__block">
                                            <i class="fa-solid fa-chevron-down"></i>
                                            </div>
                                        </div>
                                        </div>
                                        <div className='card--description'>
                                        <p>{movie.description}</p>
                                        <p>{movie.time}</p>
                                        </div>
                                </div>
                            </div>
                             )}
                </div>
              </div>

           </div>
           <Footer/>

        </div>

    );
}

