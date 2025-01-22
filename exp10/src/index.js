
import React from 'react';
import ReactDOM from 'react-dom/client';
import {

  BrowserRouter,
  
  Routes,
  
  Route,
  
  } from "react-router-dom";
import App from './App';
import About from './about';

import Book from './book';
import Menu from './menu';
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
    <Route  path="/" element={<App/>} />
    <Route path="/about" element={<About />} />
    <Route path="/book" element={<Book />} />
    <Route path="/menu" element={<Menu />} />
    </Routes>
    </BrowserRouter>
);
