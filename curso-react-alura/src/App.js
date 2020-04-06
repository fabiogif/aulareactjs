import React, { Component, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import Tabela from "./Tabela";
import Header from "./Header";
import Form from "./Formulario";
import PopUp from "./popUp";
import Sidebar from "./SiderBar";
import ApiService from "./apiService";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autores: [],
    };
  }

  escudadorDeSubmit = (autor) => {
    ApiService.criarAutor(JSON.stringify(autor))
      .then((res) => res.data)
      .then((autor) => {
        this.setState({
          autores: [...this.state.autores, autor],
        });
      });
  };

  removeAutor = (id) => {
    const { autores } = this.state;
    this.setState({
      autores: autores.filter((autor) => {
        return autor.id !== id;
      }),
    });
    ApiService.removeAutor(id);
    PopUp.exibeMenssagem("error", "Excluido com sucesso");
  };

  componentDidMount() {
    ApiService.listarAutores().then((res) => {
      this.setState({ autores: [...this.state.autores, ...res.data] });
    });
  }

  render() {
    ApiService.listarNome().then((res) => console.log(res.data));
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1> Cadastro </h1>{" "}
          <Form escudadorDeSubmit={this.escudadorDeSubmit} />{" "}
          <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />{" "}
        </div>{" "}
      </Fragment>
    );
  }
}
export default App;
