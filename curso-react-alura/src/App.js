import React, { Component, Fragment } from "react";
import "./App.css";
import Tabela from "./Tabela";
import Form from "./Formulario";

class App extends Component {
  state = {
    autores: [
      {
        nome: "Eduarda",
        livro: "Java",
        preco: "99"
      },
      {
        nome: "Fabio",
        livro: "React",
        preco: "100"
      },
      {
        nome: "Alba",
        livro: "Geografia",
        preco: "100"
      }
    ]
  };

  removeAutor = index => {
    const { autores } = this.state;
    this.setState({
      autores: autores.filter((autor, posAtual) => {
        return posAtual !== index;
      })
    });
  };

  render() {
    return (
      <Fragment>
        <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
        <Form />
      </Fragment>
    );
  }
}
export default App;
