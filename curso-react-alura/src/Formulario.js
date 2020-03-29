import React, { Component } from "react";

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.inicialState = {
      nome: "",
      livro: "",
      preco: ""
    };
    this.state = this.inicialState;
  }
  escutadorDeInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  submitFormularo = () => {
    this.props.escudadorDeSubmit(this.state);
    this.setState(this.inicialState);
  };
  render() {
    const { nome, livro, preco } = this.state;
    return (
      <form>
        <div className="row">
          <div className="input-field col s4">
            <label htmlFor="nome" className="input-field">
              Nome
            </label>
            <input
              className="validate"
              id="nome"
              type="text"
              name="nome"
              value={nome}
              onChange={this.escutadorDeInput}
            />
          </div>
          <div className="input-field col s4">
            <label htmlFor="nome" className="input-field">
              Livro
            </label>
            <input
              className="validate"
              id="livro"
              type="text"
              name="livro"
              value={livro}
              onChange={this.escutadorDeInput}
            />
          </div>

          <div className="input-field col s4">
            <label htmlFor="preco" className="input-field">
              Preço
            </label>
            <input
              className="validate"
              id="preco"
              type="text"
              name="preco"
              value={preco}
              onChange={this.escutadorDeInput}
            />
          </div>
        </div>

        <button
          type="button"
          className="waves-effect waves-light green btn"
          onClick={this.submitFormularo}
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Formulario;
