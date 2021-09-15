import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let testObject = {
    Main:'/index',
    About:'/about',
    Price:'/buy/price',
}
const headTitle = <h1>It Is React baby ~</h1>
ReactDOM.render(
  <React.StrictMode>
    <App allProps={testObject} title={headTitle}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
