import React from 'react' 
import { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import PostFeed from '../container/PostFeed';
import { Switch, Route } from 'react-router-dom'
import LoginPage from './LoginPage';
import SignUpForm from './SignUpForm';
import ProfilePage from './ProfilePage';
import { autoLogin } from '../actions/usersActions'



const App = ({user, autoLogin}) => {
  useEffect(() => localStorage.token && autoLogin(), [autoLogin])
  console.log(user.users.username)
  
    return (
      <>
      { user.users.username ?
      <Switch>
         <Route path='/posts'><PostFeed /></Route>
         <Route path="/profile"><ProfilePage /></Route>
      </Switch> :
      <LoginPage />
     }
     </>  
    );
  
}

const mapStateToProps = (state) => ({user: state.users})
 //const mapStateToProps = (state) => (console.log(state.users))

export default connect(mapStateToProps, { autoLogin } )(App);