import React, {useEffect} from 'react';
import Login from "./components/login.jsx"
import {reducerCases} from "./utils/Constants.js"
import {useStateProvider} from "./utils/StateProvider.jsx"

export default function App() {
  useEffect(() =>{
  const hash = window.lococation.hash;
  if (hash) {
    const token = hash.substring(1).split("&")[0].split("=")[1];  
    dispatchEvent({ type: reducerCases.SET_TOKEN, token })
  }
}, [token, dispatch]);
  return (
    <div> 
      <Login/>
    </div>
  )
}

