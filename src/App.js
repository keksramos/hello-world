import React from 'react';

import logo from './flower.svg';
import './App.css';
import Box from './Box';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('Jane');
  const [lastName, setLastName] = useState('Doe');

  const [counter, setCounter] = useState(0)

  function changeName(){
    const newName = document.getElementById('nameChangeInput').value
    const newLastName = document.getElementById('lastNameChangeInput').value
    setName(newName) 
    setLastName(newLastName)
    document.getElementById('nameChangeInput').value = ''
    document.getElementById('lastNameChangeInput').value = ''
    // console.log(`Aqui tenemos la linea 1 \nY esta es la segunda linea`)
    // console.log("Aqui tenemos la lineaa 1 y con \\n Hacemos cambio a la segunda")
  }

  const counterCode = () => {
    setCounter(counter + 1)
  }

  // ()=> setCounter(counter +1)

  return(
    <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         Hello, {name} {lastName}!
         <input id="nameChangeInput" type="text" placeholder="Name"/>
         <br></br>
         <input id="lastNameChangeInput" type="text" placeholder="Last name"/>
         <br></br> 
         <button onClick={event =>{ 
          changeName()
          counterCode()
         }}>Change</button>
         <p>Times name changed: {counter}</p>
       </header>
     </div>
  )
}

export default App;

// --------- PRIMERA PRACTICA DE PRIMERA CLASE ----------
// const usersWithGrades = [
//     {
//       name: 'Cecilia',
//       grade: 10,
//     },
//     {
//       name: 'Brenda',
//       grade: 9,
//     },
//     {
//       name: 'Sofia',
//       grade: 8.5,
//     },
//     {
//       name: 'Elena',
//       grade: 10,
//     },
//     {
//       name: 'Julieta',
//       grade: 9.5,
//     },
//   ]

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {
//           usersWithGrades.map((user, index) => {
//             return <Box key={index} user={user.name} grade={user.grade}/>
//           })
//         }
//       </header>
//     </div>
//   );