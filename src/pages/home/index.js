import React, { useContext, useState, useMemo } from "react";

import "./home.scss";
import "../../components/Box/box.scss"
import Box from "../../components/Box/Box";
import { GradesContext } from "../../components/App/App";

function Home() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [isDarkThemeBox, setIsDarkThemeBox] = useState(false);

    const [searchedUser, setSearchedUser] = useState('');
    const {usersWithGrades, setUsersWithGrades} = useContext(GradesContext);

    const averageGrade = () => {
        const total = usersWithGrades.reduce((acc, user) => {
            return acc + user.grade;
        }, 0);

        const result= total / usersWithGrades.length;

        return result.toFixed(2)
    }

    const avg = useMemo(() => averageGrade(), [usersWithGrades]);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        setIsDarkThemeBox(!isDarkThemeBox)
    }

    const addUser = () => {
        const userValue = document.getElementById('user').value;
        const gradeValue = Number(document.getElementById('grade').value);

        document.getElementById('user').value = ''
        document.getElementById('grade').value = ''

        setUsersWithGrades([...usersWithGrades, {
            name: userValue,
            grade: gradeValue
        }]);
    }

    const searchUser = () => {
        const userValue = document.getElementById('suser').value;

        document.getElementById('suser').value = ''

        const filteredUsers = usersWithGrades.filter((user) => {
            return user.name === userValue;
        });

        setSearchedUser(filteredUsers[0]);
    }

    return (
        <div className={`home ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
            <div className="">
                <h1>Home</h1>
                <button onClick={toggleTheme}>Toggle theme</button>
            </div>
            <div className="users">
                <input id="user" type="text" placeholder="User" />
                <input id="grade" type="number" placeholder="Grade" />
                <button onClick={addUser}>Add user</button>

                
            </div>
            <div className="search-box">
                <input id="suser" type="text" placeholder="Who are we looking for?" />
                <button onClick={searchUser}>Search user</button>
                <br></br>
                <br></br>
                <span> <b>Average grade:</b> {avg} </span>
                {
                    searchedUser && <Box  name={searchedUser.name} />
                }
            </div>
            
        </div>
    );
}

export default Home;