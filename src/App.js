import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard.js';
import About from './pages/About.js';
import Analytics from './pages/Analytics.js';
import Comment from './pages/Comment.js';

import Login from "./Form/Login.js";
import Signup from "./Form/Signup.js";

import Dash from './Page/Dash'

const App = () => {



  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
   <Sidebar>
         <Navbar/>
         <Routes>
           <Route path="/dashboard" element={<Dashboard/>}></Route>
           <Route path="/about" element={<About />} />
           <Route path="/comment" element={<Comment />} />
           <Route path="/analytics" element={<Analytics />} />
           <Route path="/dash" element={<Dash/>} />
          
         
         </Routes>
         </Sidebar>
    
   </BrowserRouter>
  );
};

export default App;