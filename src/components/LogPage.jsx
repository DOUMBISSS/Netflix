import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Login from "./Login";
import Nav from "./Nav";
import Register from "./Register";


export default function LogPage (){


    return (
        <div>
            <div className="log__page">
            <Nav/>
            <div className="login--container">
            <div className='container--login'>
                    <h1 className="container__login__header">Unlimited movies, TV shows, and more.</h1>
                    <p className="default">Watch anywhere. Cancel anytime.</p>
                    <h3 className="default-ltr">Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="button--block">
                    <div className="button--block--left">
                    <div class="form-floating mb-1">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingInput">Email address</label>
                        </div>
                    </div>
                    <div className="button--block--right">
                        <Link to='/Accueil'><button className="btn__start">Get Started </button></Link>
                    </div>
                    </div>
            </div>
            </div>
            </div>
            
        </div>
    )
}