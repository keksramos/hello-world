import React, {createContext, useState} from 'react';

import logo from '../../logo.svg';
import './App';
import MainLayout from '../../layouts/MainLayout'
import Box from '../Box/Box';
import Home from '../../pages/home';
import Episodes from '../../pages/episodes';
import Pokemones from '../../pages/pokemones';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from '../../pages/test';

export const GradesContext = React.createContext()

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />}/>
      </Route>
      <Route path="/pokemones" element={<MainLayout />}>
      <Route index element={<Pokemones />}/>
      </Route>
      <Route path="/episodes" element={<MainLayout />}>
      <Route index element={<Episodes />}/>
      </Route>
      <Route path='/test' element={<MainLayout />}>
        <Route path=':param' element={<Test />}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
