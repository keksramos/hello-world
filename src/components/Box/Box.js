import React, { useContext, useState } from "react";
import "../../pages/home/home.scss";
import { GradesContext } from "../App/App";

function Box(props) {
    const [isDarkThemeBox, setIsDarkTheme] = useState(false);
    const {usersWithGrades, setUsersWithGrades} = useContext(GradesContext);
    const {name} = props;

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkThemeBox);
    }

    const user = usersWithGrades.filter((user) => {
        return user.name === name;
    })[0];

    return <div className='box__container' >
        <p>{user.name}</p>
        <p> | </p>
        <p>{user.grade}</p>

    </div>;
}

export default Box;


