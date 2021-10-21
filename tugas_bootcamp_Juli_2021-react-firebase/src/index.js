import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import Store from './redux/store'
import Firebase, { FirebaseContext } from './firebase';




ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <FirebaseContext.Provider value = {new Firebase()}>
    <App />
    </FirebaseContext.Provider> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
