import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper indigo blue">
        <Link to="/" className="brand-logo">
          Aprendendo React
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/autores">Autores</Link>
          </li>
          <li>
            <Link to="/livros">Livros</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
