import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { coffee } from '@fortawesome/free-brands-svg-icons'
export default function  Footer () {
            
return (
    <div className='footer'>
             <div className='footer--header'>
                <p><i class="fa-solid fa-envelope"></i> Netflix@.com</p>
                <p><i class="fa-brands fa-facebook"></i> Facebook</p>
                <p><i class="fa-brands fa-instagram"></i> Instagram</p>
                
        </div>
          <div className='footers'>
          {/* <div className='right'> */}
            <p>Copyright © 2022,Netflix Civ </p>
            {/* </div> */}
      </div>  
    </div>

    );
}

