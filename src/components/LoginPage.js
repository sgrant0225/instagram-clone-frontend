import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import { submitLogin } from '../actions/usersActions'

function LoginPage(props){
  
  
  const history = useHistory();
  //const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("") 
  const [error, setError] = useState("") 
  //const isInvalid = password === '' || username === ''

  useEffect(() => {
      document.title = 'Login - Instagram'
  }, [])

  const handleSubmit = (e) => {
      e.preventDefault()
      props.submitLogin({ username, password })
      history.push("/posts")
      
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
                 alt="Instagram"
             />
           </div>
        </div>
    <form onSubmit={handleSubmit}>   
     <div className="log_fields">
        <input area-label="Enter your username" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="input-1" />
      
        <input area-aria-label='Enter your password' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-2" />
        
      
       <button type="submit" value="Log in" className="btn" >
         Log In
       </button> 
         
     </div>
    </form>            
   </div>

   <div className="sub-content">
    <div className="s-part">
      Don't have an account? <Link to="/signup"> 
      Sign up 
      </Link>
    </div>
   </div> 
            
 </div>
    
  ) 
}

export default connect(null, { submitLogin })(LoginPage);