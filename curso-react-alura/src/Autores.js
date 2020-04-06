import React, { Component, Fragment } from "react";
import Header from "./Header";
import DataTable from "./DataTable";
import Sidebar from "./SiderBar";
import ApiService from "./apiService";

class Autores extends Component {
  constructor(props) {
    super(props);

    this.state = {
      autores: [],
      titulo: "Autores",
    };
  }
  componentDidMount() {
    ApiService.listarAutores().then((res) => {
      this.setState({
        autores: [...this.state.autores, ...res.data],
      });
    });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <h1>Lista de Autores</h1>
          <DataTable
            dados={this.state.autores}
            titulo={this.state.titulo}
            colunas={["nome"]}
          />{" "}
        </div>
      </Fragment>
    );
  }
}

export default Autores;
