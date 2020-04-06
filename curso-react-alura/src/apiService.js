import api from './Api'

const ApiService = {
    // Autores
    listarAutores: () => {
        return fetch(`${api.baseUrl }autor`).then(res => res.json())
    },
    criarAutor: autor => {
        return fetch(`${api.baseUrl }autor`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: autor })
            .then(res => res.json())
    },

    listarNome: () => {
        return fetch(`${api.baseUrl }autor/nome`).then(res => res.json())
    },
    removeAutor: id => {
        return fetch(`${api.baseUrl }autor/${id}`, { method: 'DELETE', headers: { 'content-type': 'application/json' } })
            .then(res => res.json())
    },

    //Livro
    listarLivro: () => {
        return fetch(`${api.baseUrl }autor/livro`).then(res => res.json())
    }


}

export default ApiService;