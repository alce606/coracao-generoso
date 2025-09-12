import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Eventos = () => {
  const userType = localStorage.getItem('userType');
  const [eventos, setEventos] = useState([
    {
      id: 1,
      nome: 'Almoço Solidário',
      data: '2024-02-15',
      local: 'Centro Comunitário',
      descricao: 'Almoço beneficente para arrecadar fundos',
      status: ''
    },
    {
      id: 2,
      nome: 'Bazar de Roupas',
      data: '2024-02-20',
      local: 'Praça Central',
      descricao: 'Venda de roupas doadas',
      status: ''
    }
  ]);

  return (
    <div className="container">
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <span style={{ fontSize: '2.5rem', marginRight: '10px' }}>🎉</span>
            <h1 style={{ color: '#dc143c', display: 'inline' }}>
              {userType === 'admin' ? 'Gerenciar Eventos' : 'Eventos Disponíveis'}
            </h1>
          </div>
          {userType === 'admin' && (
            <Link to="/eventos/criar" className="btn btn-primary">
              + Criar Evento
            </Link>
          )}
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '20px' 
        }}>
          {eventos.map(evento => (
            <div key={evento.id} className="card" style={{ background: '#fff0f0', margin: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px' }}>
                <h3 style={{ color: '#dc143c', margin: 0 }}>{evento.nome}</h3>
                <span style={{ 
                  background: evento.status === 'Ativo' ? '#dc143c' : '#666',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  fontSize: '0.8rem'
                }}>
                  {evento.status}
                </span>
              </div>
              
              <p style={{ color: '#666', marginBottom: '10px' }}>
                <strong>📅 Data:</strong> {(() => {
                  try {
                    return new Date(evento.data).toLocaleDateString('pt-BR');
                  } catch (error) {
                    return 'Data inválida';
                  }
                })()}
              </p>
              <p style={{ color: '#666', marginBottom: '10px' }}>
                <strong>📍 Local:</strong> {evento.local}
              </p>
              <p style={{ color: '#666', marginBottom: '20px' }}>
                {evento.descricao}
              </p>
              
              <div style={{ display: 'flex', gap: '10px' }}>
                {userType === 'admin' && (
                  <Link to={`/eventos/editar/${evento.id}`} className="btn btn-secondary" style={{ flex: 1, padding: '8px', textAlign: 'center', textDecoration: 'none' }}>
                    Editar
                  </Link>
                )}
                <Link to={`/eventos/detalhes/${evento.id}`} className="btn btn-primary" style={{ flex: userType === 'admin' ? 1 : 2, padding: '8px', textAlign: 'center', textDecoration: 'none' }}>
                  Ver Detalhes
                </Link>
              </div>
            </div>
          ))}
        </div>

        {eventos.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
            <span style={{ fontSize: '3rem', display: 'block', marginBottom: '20px' }}>📅</span>
            <h3>Nenhum evento criado ainda</h3>
            <p>Comece criando seu primeiro evento beneficente!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Eventos;