import React from 'react' 
import { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import PostFeed from '../container/PostFeed';
import { Switch, Route } from 'react-router-dom'
import LoginPage from './LoginPage';
import PostCard from './PostCard';
import SignUpForm from './SignUpForm';


const App = (user) => {
  console.log(user)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
   
//   useEffect(() => )
    
    return (
       
       <Switch>
         <Route path="/login" ><LoginPage /> </Route>
         <Route path='/signup'><SignUpForm /></Route>
         <Route path='/posts'><PostFeed /></Route>
        </Switch> 
    )
    
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, null )(App);