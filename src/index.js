import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import HookTest,{HookClass} from './hooks/hooks';


export const MyContext = createContext()

const styles = {
  red: {
    color: 'red'
  },
  blue:{
    color: 'blue'
  }
}

document.body.style = 'background: #DDD;';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
