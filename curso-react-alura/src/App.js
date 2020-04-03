import React, { Component, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import Tabela from "./Tabela";
import Header from "./Header";
import Form from "./Formulario";
import PopUp from "./popUp";

class App extends Component {
  state = {
    autores: [
      {
        nome: "Eduarda",
        livro: "Java",
        preco: "99",
      },
      {
        nome: "Fabio",
        livro: "React",
        preco: "100",
      },
      {
        nome: "Alba",
        livro: "Geografia",
        preco: "100",
      },
    ],
  };

  escudadorDeSubmit = (autor) => {
    this.setState({
      autores: [...this.state.autores, autor],
    });
  };

  removeAutor = (index) => {
    const { autores } = this.state;
    this.setState({
      autores: autores.filter((autor, posAtual) => {
        return posAtual !== index;
      }),
    });
    PopUp.exibeMenssagem("error", "Excluido com sucesso");
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <Form escudadorDeSubmit={this.escudadorDeSubmit} />{" "}
          <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />{" "}
        </div>{" "}
      </Fragment>
    );
  }
}
export default App;
