import React, { Component, Fragment } from "react";
import Header from "./Header";
import DataTable from "./DataTable";
import Sidebar from "./SiderBar";

class Livros extends Component {
  constructor(props) {
    super(props);

    this.state = {
      livro: [
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
      titulo: "Livro",
    };
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Sidebar />
        <div className="container">
          <smal>Lista Livros</smal>
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
