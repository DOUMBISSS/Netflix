import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import 'animate.css';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Player } from 'video-react';
import Footer from './Footer';

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
                        <div className='slider__content'>
                            <div className='cards'>
                                <div className='cards__header'>
                                <div class="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/e0K3OjNHTtA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                                {/* <div className='cards__body'>
                                    <p>DIDI B - En Haut</p>
                                </div> */}
                            </div>
                            <div className='cards'>
                                <div className='cards__header'>
                                <div class="ratio ratio-16x9">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/8dguvuJoJ1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                                {/* <div className='cards__body'>
                                    <p>DIDI B - En Haut</p>
                                </div> */}
                            </div>
                            <div className='cards'>
                                <div className='cards__header'>
                                <div class="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/e0K3OjNHTtA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                                {/* <div className='cards__body'>
                                    <p>DIDI B - En Haut</p>
                                </div> */}
                            </div>
                            <div className='cards'>
                                <div className='cards__header'>
                                <div class="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/e0K3OjNHTtA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                                {/* <div className='cards__body'>
                                    <p>DIDI B - En Haut</p>
                                </div> */}
                            </div>
                            <div className='cards'>
                                <div className='cards__header'>
                                <div class="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/e0K3OjNHTtA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                                {/* <div className='cards__body'>
                                    <p>DIDI B - En Haut</p>
                                </div> */}
                            </div>
                </div>
              </div>

              <div className='slider__part'>
                <h5 className='slider__title'>Tendances actuelles</h5>
                        <div className='slider__content'>
                            <div className='cards'>
                                <div className='cards__header'>
                                <div class="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/e0K3OjNHTtA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                                {/* <div className='cards__body'>
                                    <p>DIDI B - En Haut</p>
                                </div> */}
                            </div>
                            <div className='cards'>
                                <div className='cards__header'>
                                <div class="ratio ratio-16x9">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/8dguvuJoJ1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                                {/* <div className='cards__body'>
                                    <p>DIDI B - En Haut</p>
                                </div> */}
                            </div>
                            <div className='cards'>
                                <div className='cards__header'>
                                <div class="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/e0K3OjNHTtA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                                {/* <div className='cards__body'>
                                    <p>DIDI B - En Haut</p>
                                </div> */}
                            </div>
                            <div className='cards'>
                                <div className='cards__header'>
                                <div class="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/e0K3OjNHTtA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                                {/* <div className='cards__body'>
                                    <p>DIDI B - En Haut</p>
                                </div> */}
                            </div>
                            <div className='cards'>
                                <div className='cards__header'>
                                <div class="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/e0K3OjNHTtA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                                {/* <div className='cards__body'>
                                    <p>DIDI B - En Haut</p>
                                </div> */}
                            </div>
                </div>
              </div>
              <div className='slider__part'>
                <h5 className='slider__title'>Séries incontournables</h5>
                        <div className='slider__content'>
                            <div className='cards'>
                                <div className='cards__header'>
                                <div class="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/e0K3OjNHTtA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                                {/* <div className='cards__body'>
                                    <p>DIDI B - En Haut</p>
                                </div> */}
                            </div>
                            <div className='cards'>
                                <div className='cards__header'>
                                <div class="ratio ratio-16x9">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/8dguvuJoJ1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                                {/* <div className='cards__body'>
                                    <p>DIDI B - En Haut</p>
                                </div> */}
                            </div>
                            <div className='cards'>
                                <div className='cards__header'>
                                <div class="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/e0K3OjNHTtA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                                {/* <div className='cards__body'>
                                    <p>DIDI B - En Haut</p>
                                </div> */}
                            </div>
                            <div className='cards'>
                                <div className='cards__header'>
                                <div class="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/e0K3OjNHTtA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                                {/* <div className='cards__body'>
                                    <p>DIDI B - En Haut</p>
                                </div> */}
                            </div>
                            <div className='cards'>
                                <div className='cards__header'>
                                <div class="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/e0K3OjNHTtA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                                {/* <div className='cards__body'>
                                    <p>DIDI B - En Haut</p>
                                </div> */}
                            </div>
                </div>
              </div>
              <div className='slider__part'>
                <h5 className='slider__title'>Animation</h5>
                        <div className='slider__content'>
                            <div className='cards'>
                                <div className='cards__header'>
                                <div class="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/e0K3OjNHTtA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                                {/* <div className='cards__body'>
                                    <p>DIDI B - En Haut</p>
                                </div> */}
                            </div>
                            <div className='cards'>
                                <div className='cards__header'>
                                <div class="ratio ratio-16x9">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/8dguvuJoJ1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                                {/* <div className='cards__body'>
                                    <p>DIDI B - En Haut</p>
                                </div> */}
                            </div>
                            <div className='cards'>
                                <div className='cards__header'>
                                <div class="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/e0K3OjNHTtA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                                {/* <div className='cards__body'>
                                    <p>DIDI B - En Haut</p>
                                </div> */}
                            </div>
                            <div className='cards'>
                                <div className='cards__header'>
                                <div class="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/e0K3OjNHTtA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                                {/* <div className='cards__body'>
                                    <p>DIDI B - En Haut</p>
                                </div> */}
                            </div>
                            <div className='cards'>
                                <div className='cards__header'>
                                <div class="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/e0K3OjNHTtA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                                {/* <div className='cards__body'>
                                    <p>DIDI B - En Haut</p>
                                </div> */}
                            </div>
                </div>
              </div>
           </div>
           <Footer/>

        </div>

    );
}

