import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Contact from './componentes/Contact'
import TopBar from './componentes/TopBar';

import Navbar from './componentes/Navbar'

import Home from './componentes/Home'





class App extends Component {
  render() {
    return (
      <BrowserRouter className='App'>
             <TopBar/>
             <Navbar/>
             
             <Routes>
             <Route path='Home' Component={Home}/>
             <Route path='contact' Component={Contact}/>
             </Routes>
      </BrowserRouter>
      
      

      



    );
  }  
}

export default App;
