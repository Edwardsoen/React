import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/navbar'
import App from './Components/App'
import { Home } from '@material-ui/icons';
import Profile from './Components/profile'




ReactDOM.render(<App />, document.getElementById('root'),);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
