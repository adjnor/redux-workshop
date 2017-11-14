import React from 'react';
import { createStore } from 'redux'; //Import createStore function from redux
import { Provider } from 'react-redux'; //Import Provider component from react-redux
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducer'; //Import reducer function we defined to pass to createStore

//Create redux store with the createStore function
//First parameter is the reducer (if you want multiple reducers, search for combineReducers)
//Second parameter is an extension to use redux devtools (this is with the chrome extension)
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//Render the App component inside the redux Provider component so that our connected components have access
//to the state and dispatch function
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
