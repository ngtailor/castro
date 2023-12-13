import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import './assets/css/animate.css'
import "./assets/css/bootstrap.css"
import './assets/css/color.css'
import './assets/css/flaticon.css'
import './assets/css/font-awesome-all.css'
import './assets/css/jquery-ui.css'
import './assets/css/jquery.bootstrap-touchspin.css'
import './assets/css/jquery.fancybox.min.css'
import './assets/css/nice-select.css'
import './assets/css/owl.css'
import './assets/css/responsive.css'
import './assets/css/rtl.css'
import './assets/css/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
