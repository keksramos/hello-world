import logo from './logo.svg';
import './App.css';
import Box from './Box';

function App() {
  const usersWithGrades = [
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
    },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          usersWithGrades.map((user, index) => {
            return <Box key={index} user={user.name} grade={user.grade}/>
          })
        }
      </header>
    </div>
  );
}

export default App;
