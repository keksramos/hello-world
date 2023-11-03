import React from "react";
import "../Navbar/navbar.scss";
import { Link } from "react-router-dom";
import Logo from '../../flower.svg'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <div className="logo">
          <img src={Logo} width={40}></img>
          <h1 className="webName">Cecilia Ramos</h1>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/episodes">Episodes</Link>
          <Link to="/pokemones">Pokemones</Link>
        </div>
      </div>
    </nav>
  );
}
