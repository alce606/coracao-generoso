import React from 'react';
import { Link, useParams } from 'react-router-dom';

const DetalhesEvento = () => {
  const { id } = useParams();
  
  // Simulando dados do evento
  const evento = {
    id: 1,
    nome: 'Almoço Solidário',
    data: '2024-02-15',
    horario: '12:00',
    local: 'Centro Comunitário',
    descricao: 'Almoço beneficente para arrecadar fundos para a comunidade local',
    tipoEvento: 'Almoço Beneficente',
    metaArrecadacao: '5000.00',
    responsavel: 'Maria Silva',
    status: 'Ativo',
    participantes: 45,
    arrecadado: '3200.00'
  };

  return (
    <div className="container">
      <div className="card">
        <div style={{ marginBottom: '30px' }}>
          <Link to="/eventos" style={{ color: '#dc143c', textDecoration: 'none' }}>
            ← Voltar para Eventos
          </Link>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <span style={{ fontSize: '3rem' }}>🎉</span>
          <h1 style={{ color: '#dc143c', marginTop: '10px' }}>{evento.nome}</h1>
          <span style={{ 
            background: evento.status === 'Ativo' ? '#dc143c' : '#666',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.9rem'
          }}>
            {evento.status}
          </span>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px' 
        }}>
          <div>
            <h3 style={{ color: '#dc143c', marginBottom: '20px' }}>📋 Informações do Evento</h3>
            
            <div style={{ background: '#fff0f0', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
              <p style={{ marginBottom: '10px' }}>
                <strong>📅 Data:</strong> {new Date(evento.data).toLocaleDateString('pt-BR')}
              </p>
              <p style={{ marginBottom: '10px' }}>
                <strong>🕐 Horário:</strong> {evento.horario}
              </p>
              <p style={{ marginBottom: '10px' }}>
                <strong>📍 Local:</strong> {evento.local}
              </p>
              <p style={{ marginBottom: '10px' }}>
                <strong>🎯 Tipo:</strong> {evento.tipoEvento}
              </p>
              <p style={{ marginBottom: '0' }}>
                <strong>👤 Responsável:</strong> {evento.responsavel}
              </p>
            </div>

            <div style={{ background: '#fff0f0', padding: '20px', borderRadius: '10px' }}>
              <h4 style={{ color: '#dc143c', marginBottom: '10px' }}>📝 Descrição</h4>
              <p style={{ lineHeight: '1.6', color: '#555' }}>{evento.descricao}</p>
            </div>
          </div>

          <div>
            <h3 style={{ color: '#dc143c', marginBottom: '20px' }}>📊 Estatísticas</h3>
            
            <div style={{ background: '#fff0f0', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <span style={{ fontSize: '2rem', display: 'block' }}>👥</span>
                <h4 style={{ color: '#dc143c', margin: '10px 0 5px' }}>{evento.participantes}</h4>
                <p style={{ color: '#666', margin: 0 }}>Participantes</p>
              </div>
            </div>

            <div style={{ background: '#fff0f0', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
              <h4 style={{ color: '#dc143c', marginBottom: '15px' }}>💰 Arrecadação</h4>
              <div style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <span>Arrecadado:</span>
                  <strong>R$ {evento.arrecadado}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span>Meta:</span>
                  <span>R$ {evento.metaArrecadacao}</span>
                </div>
                <div style={{ 
                  background: '#ddd', 
                  borderRadius: '10px', 
                  height: '10px',
                  overflow: 'hidden'
                }}>
                  <div style={{ 
                    background: '#dc143c', 
                    height: '100%', 
                    width: `${parseFloat(evento.metaArrecadacao) > 0 ? (parseFloat(evento.arrecadado) / parseFloat(evento.metaArrecadacao)) * 100 : 0}%`,
                    borderRadius: '10px'
                  }}></div>
                </div>
                <p style={{ textAlign: 'center', marginTop: '5px', fontSize: '0.9rem', color: '#666' }}>
                  {parseFloat(evento.metaArrecadacao) > 0 ? Math.round((parseFloat(evento.arrecadado) / parseFloat(evento.metaArrecadacao)) * 100) : 0}% da meta
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <Link to={`/eventos/editar/${evento.id}`} className="btn btn-secondary" style={{ flex: 1, textAlign: 'center' }}>
                ✏️ Editar
              </Link>
              <button className="btn btn-primary" style={{ flex: 1 }}>
                📤 Compartilhar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalhesEvento;