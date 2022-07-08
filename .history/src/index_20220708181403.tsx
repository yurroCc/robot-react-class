import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
console.log(root)
// const username = "alex"
const defaultContextValue = {
  username: "alex",
}
export const appContext = React.createContext(defaultContextValue)
root.render(

  // <App username = {username}/>
  <App
    <App></App>
  </appContext.Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
