import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { TablePage } from './container/tablePage';
import NavBar from './component/navBar';
import HomePage from './container/home';
function App() {



  return (


    <BrowserRouter>
     <NavBar />
      <Routes>
        <Route path="/table"  element={<TablePage />} />
        <Route path="/" element={<HomePage />}/>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
