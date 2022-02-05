import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/App'
import { rootReducer } from './reducers/rootReducer'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

//create store function
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore (rootReducer, composeEnhancers(applyMiddleware(thunk)
    ));

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