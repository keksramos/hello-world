import React, { useContext, useState } from "react";
import "./box.scss";
import { GradesContext } from "../App/App";

function Box(props) {
    const [isDarkThemeBox, setIsDarkTheme] = useState(true);
    const {usersWithGrades, setUsersWithGrades} = useContext(GradesContext);
    const {name} = props;

    const user = usersWithGrades.filter((user) => {
        return user.name === name;
    })[0];

    return <div className={`box ${isDarkThemeBox ? 'dark-theme' : 'light-theme'}`}>
        <p>{user.name}</p>
        <p> | </p>
        <p>{user.grade}</p>
    </div>;
}

export default Box;
