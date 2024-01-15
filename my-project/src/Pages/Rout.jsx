import React from 'react'
import {Routes, Route } from 'react-router-dom';
import Home from './Home';
import CardDe from '../components/CardDe';
function Rout() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />}/>
        <Route path='/:id' element={<CardDe/>}/>
    </Routes>
    </div>
  )
}

export default Rout