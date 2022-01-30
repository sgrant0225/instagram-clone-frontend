import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import {useState, useEffect} from 'react';
import { submitSignup } from '../actions/usersActions'

function SignUpForm(props){
  
  
    const history = useHistory();
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("") 
    const [bio, setBio] = useState("")
    const [photo, setPhoto] = useState("")
    const [error, setError] = useState("") 
    //const isInvalid = password === '' || username === ''
  
    useEffect(() => {
        document.title = 'Login - Instagram'
    }, [])
  
    const handleSubmit = (e) => {
        e.preventDefault()
        props.submitSignup({ email, username, password, bio, photo })
        history.push("/posts")
        
    }
    
    return (
     <div className="login"> 
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
          <input area-label="Enter your email" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-1" />

          <input area-label="Enter your username" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="input-2" />
        
          <input area-aria-label='Enter your password' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-3" />
          
          <textarea area-label="Enter your bio" type="text" placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} className="input-4" />
           
          <input area-aria-label='Enter your profile pic' type="text" placeholder="Photo" value={photo} onChange={(e) => setPhoto(e.target.value)} className="input-5" />

        
         <button type="submit" value="Sign up" className="btn" >
           Sign up
         </button> 
           
       </div>
      </form>            
     </div>
  
     <div className="sub-content">
      <div className="s-part">
        Have an account? 
        <Link to="/login"> 
          Log In
       </Link>
      </div>
     </div> 
              
   </div>
      
    ) 
  }
  
  export default connect(null, { submitSignup })(SignUpForm);











//     class SignUpForm extends Component {

//     state = {
//         username: "",
//         email: "",
//         password: "",
//         bio: "",
//         photo: ""
//     }

//      handleChange = (e) => {
//        const { value, name } = e.target;
//        this.setState({
//            [name]: value
//       })
//     }

//     handleSubmit = (e) => {
//         alert('A name was submitted: ' + this.state.username);
//         e.preventDefault();
        
//     }

//    render() {
//        return (
        
//        <form onSubmit={this.handleSubmit}>
//            <label> Username: </label>
//            <input 
//            id="username-input" 
//            type="text" name="username" 
//            value={this.state.username} 
//            onChange={this.handleChange} /> 
           

//            <label> Email: </label>
//            <input id="email-input" 
//            type="text" name="email" 
//            value={this.state.email} 
//            onChange={this.handleChange} /> 
           

//            <label> Password: </label>
//            <input id="password-input" 
//            type="text" name="password" 
//            value={this.state.password} 
//            onChange={this.handleChange} />
           
//            <label> Bio: </label>
//            <textarea id="bio-input" 
//            type="text" name="bio" 
//            value={this.state.bio} 
//            onChange={this.handleChange} />

//            <label> Photo: </label>
//            <input id="photo-input" 
//            type="text" name="photo" 
//            value={this.state.photo} 
//            onChange={this.handleChange} />
          
//           <button type="submit" > Sign up</button>
//        </form>
       
//        )
//    }
    
// } 


// export default connect(null, null ) (SignUpForm);