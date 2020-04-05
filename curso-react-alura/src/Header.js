import React from "react";
import LinkWrapper from "./LinkWrapper";

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper indigo blue">
        <LinkWrapper to="/" className="brand-logo" activeStyle={{}}>
          Vamos de React
        </LinkWrapper>
        <ul id="nav-mobile" className="right">
          <li>
            <LinkWrapper to="/autores">Autores</LinkWrapper>
          </li>
          <li>
            <LinkWrapper to="/livros">Livros</LinkWrapper>
          </li>
          <li>
            <LinkWrapper to="/sobre">Sobre</LinkWrapper>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
