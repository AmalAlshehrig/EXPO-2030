import React from 'react'
import {Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import CardDe from '../Pages/CardDe';
import Welcom from '../Pages/Welcom';
function Rout() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Welcom/>}/>
      <Route path="/Home" element={<Home />}/>
        <Route path='/Home/:id' element={<CardDe/>}/>
    </Routes>
    </div>
  )
}

export default Rout