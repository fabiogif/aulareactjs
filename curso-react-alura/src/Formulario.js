import React, { Component } from "react";
import FormValidator from "./FormValidator";
import PopUp from "./popUp";
class Formulario extends Component {
  constructor(props) {
    super(props);

    this.validador = new FormValidator([
      {
        campo: "nome",
        metodo: "isEmpty",
        validQuando: false,
        mensagem: "Preencha o campo nome",
      },
      {
        campo: "livro",
        metodo: "isEmpty",
        validQuando: false,
        mensagem: "Preencha o campo livro",
      },
      {
        campo: "preco",
        metodo: "isInt",
        args: [
          {
            min: 0,
            max: 9999,
          },
        ],
        validQuando: true,
        mensagem: "Preencha preço com valor númerico",
      },
    ]);

    this.inicialState = {
      nome: "",
      livro: "",
      preco: "",
      validacao: this.validador.valido(),
    };
    this.state = this.inicialState;
  }
  escutadorDeInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  submitFormularo = () => {
    const validacao = this.validador.valida(this.state);

    if (validacao.isValid) {
      this.props.escudadorDeSubmit(this.state);
      this.setState(this.inicialState);
      PopUp.exibeMenssagem("sucess", "Adiconado com sucesso");
    } else {
      const { nome, livro, preco } = validacao;
      const campos = [nome, livro, preco];

      const camposInvalidos = campos.filter((elem) => {
        return elem.isInvalid;
      });
      camposInvalidos.forEach((campo) => {
        PopUp.exibeMenssagem("alert", campo.message);
      });
    }
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
