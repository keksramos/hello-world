import React, { useContext, useState } from "react";
import "./box.scss";
import { GradesContext } from "../App/App";

function Box(props) {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const {usersWithGrades, setUsersWithGrades} = useContext(GradesContext);
    const {name} = props;

    const user = usersWithGrades.filter((user) => {
        return user.name === name;
    })[0];

    const toggleThemeBox = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    return <div className={`box ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
        <h1>{user.name}</h1>
        <h1> | </h1>
        <h1>{user.grade}</h1>
    </div>;
}

export default Box;
