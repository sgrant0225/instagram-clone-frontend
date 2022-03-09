import React from 'react' 
import { useEffect } from 'react';
import { connect } from 'react-redux'
import PostFeed from '../container/PostFeed';
import { Switch, Route } from 'react-router-dom'
import LoginPage from './LoginPage';
import SignUpForm from './SignUpForm';
import ProfilePage from './ProfilePage';
import { autoLogin } from '../actions/actionCreators'
import PostShow from './PostShow';



const App = ({user, autoLogin}) => {
  useEffect(() => localStorage.token && autoLogin(), [autoLogin])
  
  
    return (
      <>
      
      { user.username ?
      
      <Switch>
         <Route path='/posts/:id'><PostShow /></Route>  #When using Route it is saying to match the specific path and render that component
         <Route path='/posts'><PostFeed /></Route>
         <Route path="/profile"><ProfilePage /></Route>
      </Switch> :
         <Route path='/login'><LoginPage /></Route>
      }
      <Route path='/signup'><SignUpForm /></Route>
     </>  
    );
  }

const mapStateToProps = (state) => ({user: state.user})


export default connect(mapStateToProps, { autoLogin } )(App);

