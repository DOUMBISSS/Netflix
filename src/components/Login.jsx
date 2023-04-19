import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"; 
import Navbar from "../Pages/Navbar";



export default function Login ({userAuthentication,isUserLoggedIn}){
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleEmail =(event)=>{
      setEmail(event.target.value)
  }

  const handlePassword = (event)=>{
    setPassword(event.target.value)
  }

  // const auth = localStorage.getItem("user");

  const Connexion= (e) =>{
    e.preventDefault();
    const dataLogin = {
      email,
      password
    }
    fetch('http://localhost:8080/login',{
          method:"POST",
          headers :{'Content-Type':"application/json"},
          body: JSON.stringify(dataLogin)
      }).then((res)=>res.json())
       .then((user)=> {
        localStorage.setItem("user",JSON.stringify(user))
        navigate('/')
        setSuccess(true)
        // notify("")    
        }).catch(err => {console.log(err)});
        console.log(localStorage)
  };

    return (
            <div>
               <div className="log__page">
            {/* <Navbar/> */}
            <div className="container__login__page">
            <div className='login--content'>
                  <h2 className='login--page--title'>Se connecter</h2>
                      <form onSubmit={Connexion}>
                      <div className="form-floating mb-3">
                          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required  onChange={handleEmail}/>
                          <label htmlFor="floatingInput">Email </label>
                        </div>
                        <div className="form-floating">
                          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required  onChange={handlePassword}/>
                          <label htmlFor="floatingPassword">Mot de passe</label>
                        </div>
                        <button type="submit" className="btn__login" >Connexion</button>
                      </form>
                      <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                        <label class="form-check-label" for="invalidCheck">
                          Agree to terms and conditions
                        </label>
                        <div class="invalid-feedback">
                          You must agree before submitting.
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            </div>
                    
            </div>
    )
}