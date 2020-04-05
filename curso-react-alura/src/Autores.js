import React, { Component, Fragment } from "react";
import Header from "./Header";
import DataTable from "./DataTable";
import Sidebar from "./SiderBar";

class Autores extends Component {
  constructor(props) {
    super(props);

    this.state = {
      autores: [
        {
          nome: "Paulo",
          livro: "React",
          preco: "1000",
        },
        {
          nome: "Daniel",
          livro: "Java",
          preco: "99",
        },
        {
          nome: "Marcos",
          livro: "Design",
          preco: "150",
        },
        {
          nome: "Bruno",
          livro: "DevOps",
          preco: "100",
        },
        {
          nome: "Nico",
          livro: "Java",
          preco: "9999",
        },
      ],
      titulo: "Autores",
    };
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Sidebar />
        <div className="container">
          <smal>Lista Autores</smal>
          <DataTable
            dados={this.state.autores}
            titulo={this.state.titulo}
            colunas={["nome"]}
          />
        </div>
      </Fragment>
    );
  }
}

export default Autores;
