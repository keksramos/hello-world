import React, {createContext, useState} from 'react';

import logo from '../../logo.svg';
import './App';
import Box from '../Box/Box';
import Home from '../../pages/home';
import Episodes from '../../pages/episodes';
import Pokemones from '../../pages/pokemones';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const GradesContext = React.createContext()

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Episodes />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;