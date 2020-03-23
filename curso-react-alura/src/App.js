import React, { Component } from "react";
import "./App.css";
import Tabela from "./Tabela";

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

  removeAutor = () => {};

  render() {
    return (
      <div className="App">
        <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
      </div>
    );
  }
}
export default App;
