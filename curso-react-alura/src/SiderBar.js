import React, { Component } from "react";
import Materialize from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import LinkWrapper from "./LinkWrapper";

class Sidebar extends Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    Materialize.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250,
    });
  }

  render() {
    return (
      <div>
        <ul id="slide-out" className="sidenav">
          <li />
          <li>
            <LinkWrapper to="/">Inicio</LinkWrapper>
          </li>

          <li>
            <div className="divider" />
          </li>
          <li>
            <LinkWrapper to="/livros">Livros</LinkWrapper>
          </li>
          <li>
            <LinkWrapper to="/autores">Autores</LinkWrapper>
          </li>
        </ul>
        <LinkWrapper
          href="#"
          data-target="slide-out"
          className="sidenav-trigger"
        >
          <i className="material-icons">Chamar Menu</i>
        </LinkWrapper>
      </div>
    );
  }
}

export default Sidebar;
