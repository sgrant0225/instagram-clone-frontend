import React from 'react' 
//import { Suspense } from 'react';
//import PostFeed from '../container/PostFeed';
import { Switch, Route } from 'react-router-dom'
import LoginPage from './LoginPage';

const App = () => {
    return(
     
       <Switch>
         <Route path="/login" ><LoginPage /> </Route>
        </Switch>
     
          
         
      
    )
}

export default App;