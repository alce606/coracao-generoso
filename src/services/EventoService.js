import http from '../common/http-common';

const API_URL = "evento/";

// Teste de conexão
const test = () => {
    return http.mainInstance.get(API_URL + 'test');
};

// Buscar todos os eventos
const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

// Buscar evento por ID
const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

// Cadastrar novo evento
const save = (evento) => {
    return http.mainInstance.post(API_URL + 'save', evento);
};

const EventoService = {
    test,
    findAll,
    findById,
    save
};

export default EventoService;
