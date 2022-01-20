import React from 'react';
import { useHistory } from 'react-router-dom';
import {useState, useEffect} from 'react';

function LoginPage(){
  
  const history = useHistory();
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("") 
  const [error, setError] = useState("") 
  const isInvalid = password === '' || email === ''

  useEffect(() => {
      document.title = 'Login - Instagram'
  }, [])

  const handleSubmit = (e) => {
      e.preventDefault()
      
  }
  
  return (
      <div className="login"> 
       <div className='image_column'>
        <img className='login_headerImage' 
               src='https://lh3.googleusercontent.com/XohGPm5fk6sIZM9qGNiGyv-PRHziBK9hz-sNWfTYDr4KiHYSW4YZ3z5NtnsDOn2zDEGFHJwvC4XGW-Y5RqnI50ZMIgSwlYo3uYX7sZ5_'
               alt="" 
           />
        </div>
     <div className='main-content'>
         <div className='image_column'> 
           <div className="header">
             <img src="https://i.imgur.com/zqpwkLQ.png" 
                 alt=""
             />
           </div>
        </div>
    <form onSubmit={handleSubmit}>   
     <div className="l-part">
        <input type="text" placeholder="Username" value={username} onChange={(target) => console.log(target.value)} className="input-1" />
      <div className="overlap-text">
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-2" />
        <a href="#">Forgot?</a>
      </div>
       <input type="submit" value="Log in" className="btn" />
    </div>
    </form>            
   </div>
   <div className="sub-content">
    <div className="s-part">
      Don't have an account?<a href="#">Sign up</a>
    </div>
   </div> 
            
 </div>
    
  ) 
}

export default LoginPage;