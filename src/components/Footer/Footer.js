import React from "react";
import "../Footer/footer.scss"
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="contentainerFooter">
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/episodes">Episodes</Link>
          <Link to="/pokemones">Pokemones</Link>
        </div>
      </div>
    </footer>
  );
}
