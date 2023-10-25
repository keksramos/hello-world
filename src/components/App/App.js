import React, {createContext, useState} from 'react';

import logo from '../../logo.svg';
import './App';
import Box from '../Box/Box';
import Home from '../../pages/home';

export const GradesContext = React.createContext()

function App() {

  const [usersWithGrades, setUsersWithGrades] = useState([
    {
      name: 'Cecilia',
      grade: 10,
    },
    {
      name: 'Brenda',
      grade: 9,
    },
    {
      name: 'Sofia',
      grade: 8.5,
    },
    {
      name: 'Elena',
      grade: 10,
    },
    {
      name: 'Julieta',
      grade: 9.5,
    }
  ])

  return(
  <GradesContext.Provider value = {{usersWithGrades, setUsersWithGrades}}>
    <Home />
    </GradesContext.Provider>
    )
}

export default App;