import validator from 'validator';

class FormValidator {
    constructor(validacao) {
        this.validacao = validacao
    }

    valid(state) {
        const campoValor = state[this.validacao.campo.toString()]
        const metodoValidacao = validator[this.validacao.metodo]

        if (metodoValidacao(campoValor, [], state)) {
            console.log('Form invalido')
            return false
        }
        return true

    }
}

export default FormValidator;