import api from '../config/api';

export const eventService = {
  // Buscar todos os eventos
  getAll: async (params = {}) => {
    const response = await api.get('/events', { params });
    return response.data;
  },

  // Buscar evento por ID
  getById: async (id) => {
    const response = await api.get(`/events/${id}`);
    return response.data;
  },

  // Criar novo evento
  create: async (eventData) => {
    const response = await api.post('/events', eventData);
    return response.data;
  },

  // Atualizar evento
  update: async (id, eventData) => {
    const response = await api.put(`/events/${id}`, eventData);
    return response.data;
  },

  // Deletar evento
  delete: async (id) => {
    const response = await api.delete(`/events/${id}`);
    return response.data;
  },

  // Buscar estatísticas de eventos
  getStats: async () => {
    const response = await api.get('/events/stats');
    return response.data;
  }
};