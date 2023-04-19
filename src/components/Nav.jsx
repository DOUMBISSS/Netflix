import React from 'react';
import {Link} from 'react-router-dom';


export default function Nav () {
 
    return (
      <div>
      <header>
          <div className='nav'>
          <div className="nav--left">
            <div className="nav--logo">
              {/* <Link to="/"> <img src={`${process.env.PUBLIC_URL}/easy.png`} alt=""/></Link> */}
              <img src="https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/0/3/0/030dc01da7_50145928_netflix-logo.jpg" alt="" />
            </div>
          </div>
          <div className="nav--right">
          <div className="nav--right--content">
                     <Link to='/login'><button className="btn--connexion">Sign Up</button></Link>
            </div>
          </div>
         </div>
    </header>

              </div>
    );
}

