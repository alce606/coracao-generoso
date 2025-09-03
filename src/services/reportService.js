import api from '../config/api';

export const reportService = {
  // Relatório geral do sistema
  getSystemStats: async () => {
    const response = await api.get('/reports/system');
    return response.data;
  },

  // Relatório de eventos
  getEventStats: async (period = 'month') => {
    const response = await api.get(`/reports/events?period=${period}`);
    return response.data;
  },

  // Relatório de usuários
  getUserStats: async (period = 'month') => {
    const response = await api.get(`/reports/users?period=${period}`);
    return response.data;
  },

  // Relatório financeiro
  getFinancialStats: async (period = 'month') => {
    const response = await api.get(`/reports/financial?period=${period}`);
    return response.data;
  },

  // Exportar relatório
  exportReport: async (type, format = 'pdf') => {
    const response = await api.get(`/reports/export/${type}?format=${format}`, {
      responseType: 'blob'
    });
    return response.data;
  }
};