import React , {useState} from "react";

import "./home.scss"

function Home(){
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }
    return (
        <section className={`home ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
            <h1>Home</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </section>
        )
}

export default Home