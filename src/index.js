import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk' 
import App from './components/App'
import { rootReducer } from './reducers/rootReducer'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

//create store function
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //this is creating a store enhancer
const store = createStore (rootReducer, composeEnhancers(applyMiddleware(thunk)
    )); //The store holds the entire state of the app. Creating a state to be accessed globally

ReactDOM.render(
 <React.StrictMode>    
    <Router>
     <Provider store={store}>
         <App />
     </Provider>
    </Router>
 </React.StrictMode>, 
    document.getElementById('root')
)    