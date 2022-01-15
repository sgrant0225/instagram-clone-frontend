import React, { Component } from 'react'

class SignUpForm extends Component {

    state = {
        username: "",
        email: "",
        password: "",
        bio: "",
        photo: ""
    }

     handleChange = (e) => {
       const { value, name } = e.target;
       console.log(name)
       console.log(value)
       this.setState({
           [name]: value
      })
    }

    handleSubmit = (e) => {
        alert('A name was submitted: ' + this.state.username);
        e.preventDefault();
        
    }

   render() {
       return (
        
       <form onSubmit={this.handleSubmit}>
           <label> Username: </label>
           <input 
           id="username-input" 
           type="text" name="username" 
           value={this.state.username} 
           onChange={this.handleChange} /> 
           

           <label> Email: </label>
           <input id="email-input" 
           type="text" name="email" 
           value={this.state.email} 
           onChange={this.handleChange} /> 
           

           <label> Password: </label>
           <input id="password-input" 
           type="text" name="password" 
           value={this.state.password} 
           onChange={this.handleChange} />
           
           <label> Bio: </label>
           <textarea id="bio-input" 
           type="text" name="bio" 
           value={this.state.bio} 
           onChange={this.handleChange} />

           <label> Photo: </label>
           <input id="photo-input" 
           type="text" name="photo" 
           value={this.state.photo} 
           onChange={this.handleChange} />
          
          <button type="submit" > Sign up</button>
       </form>
       
       )
   }
    
    
}

export default SignUpForm;