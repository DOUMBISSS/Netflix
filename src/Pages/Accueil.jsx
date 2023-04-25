import React, { useState } from 'react';
import 'animate.css';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import Footer from './Footer';

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
                <div id="carouselExampleCaptions" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="https://i.ytimg.com/vi/gmH8DgvO7Kc/maxresdefault.jpg" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
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

