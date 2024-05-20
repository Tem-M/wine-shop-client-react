import './App.css';
import {Provider} from "react-redux"
import { store } from "./redux/store"
import {MyProvider} from "./components/contex"
import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Routing} from './components/routing'
import {Nav} from "./components/nav"
import {useState} from "react"
function App() {

  const admin=useState({userName:"admin",
  password:"abcdefg"});

  const contexStore={
    admin:admin
  }

  return <>
     
      <MyProvider value={contexStore}>
        <Provider store = {store}>
            <BrowserRouter>
              <Nav></Nav>
              <Routing></Routing>
          </BrowserRouter>
        </Provider>
      </MyProvider> 
    
  </>
}

export default App;
