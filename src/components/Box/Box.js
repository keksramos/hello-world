import React, { useContext } from "react";
import "./box.scss";
import { GradesContext } from "../App/App";

function Box(props) {
    const {usersWithGrades, setUsersWithGrades} = useContext(GradesContext);
    const {name} = props;

    const user = usersWithGrades.filter((user) => {
        return user.name === name;
    })[0];

    return <div className="box">
        <h1>{user.name}</h1>
        <h1> | </h1>
        <h1>{user.grade}</h1>
    </div>;
}

export default Box;