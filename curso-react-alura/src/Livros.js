import React, { Component, Fragment } from "react";
import Header from "./Header";
import DataTable from "./DataTable";
import Sidebar from "./SiderBar";
import ApiService from "./apiService";

class Livros extends Component {
  constructor(props) {
    super(props);

    this.state = {
      livro: [],
      titulo: "Livro",
    };
  }

  componentDidMount() {
    ApiService.listarLivro().then((res) => {
      this.setState({ livro: [...this.state.livro, ...res.data] });
    });
  }
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <h1>Lista Livros</h1>
          <DataTable
            dados={this.state.livro}
            titulo={this.state.titulo}
            colunas={["livro"]}
          />
        </div>
      </Fragment>
    );
  }
}

export default Livros;
