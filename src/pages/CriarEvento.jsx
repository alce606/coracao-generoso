import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CriarEvento = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    data: '',
    horario: '',
    local: '',
    descricao: '',
    tipoEvento: '',
    metaArrecadacao: '',
    responsavel: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    try {
      // Validação de data futura
      const eventDate = new Date(formData.data);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (eventDate < today) {
        alert('A data do evento deve ser futura.');
        return;
      }
      
      // Validação de meta de arrecadação
      if (formData.metaArrecadacao && parseFloat(formData.metaArrecadacao) < 0) {
        alert('A meta de arrecadação deve ser um valor positivo.');
        return;
      }
      
      alert('Evento criado com sucesso!');
      navigate('/eventos');
    } catch (error) {
      alert('Erro ao criar evento. Verifique os dados e tente novamente.');
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div style={{ marginBottom: '30px' }}>
          <Link to="/eventos" style={{ color: '#dc143c', textDecoration: 'none' }}>
            ← Voltar para Eventos
          </Link>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <span style={{ fontSize: '3rem' }}>🎉</span>
            <h1 style={{ color: '#dc143c', marginTop: '10px' }}>Criar Novo Evento</h1>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div>
              <div className="form-group">
                <label>Nome do Evento</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Ex: Almoço Solidário"
                  required
                />
              </div>

              <div className="form-group">
                <label>Tipo de Evento</label>
                <select
                  name="tipoEvento"
                  value={formData.tipoEvento}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                  required
                >
                  <option value="">Selecione o tipo</option>
                  <option value="almoco">Almoço Beneficente</option>
                  <option value="jantar">Jantar Solidário</option>
                  <option value="bazar">Bazar</option>
                  <option value="festa">Festa Junina</option>
                  <option value="caminhada">Caminhada</option>
                  <option value="palestra">Palestra</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div className="form-group">
                  <label>Data</label>
                  <input
                    type="date"
                    name="data"
                    value={formData.data}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Horário</label>
                  <input
                    type="time"
                    name="horario"
                    value={formData.horario}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Local</label>
                <input
                  type="text"
                  name="local"
                  value={formData.local}
                  onChange={handleChange}
                  placeholder="Ex: Centro Comunitário"
                  required
                />
              </div>
            </div>

            <div>
              <div className="form-group">
                <label>Descrição do Evento</label>
                <textarea
                  name="descricao"
                  value={formData.descricao}
                  onChange={handleChange}
                  rows="4"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '16px',
                    resize: 'vertical'
                  }}
                  placeholder="Descreva o objetivo e detalhes do evento..."
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label>Meta de Arrecadação (R$)</label>
                <input
                  type="number"
                  name="metaArrecadacao"
                  value={formData.metaArrecadacao}
                  onChange={handleChange}
                  placeholder="0.00"
                  step="0.01"
                />
              </div>

              <div className="form-group">
                <label>Responsável pelo Evento</label>
                <input
                  type="text"
                  name="responsavel"
                  value={formData.responsavel}
                  onChange={handleChange}
                  placeholder="Nome do responsável"
                  required
                />
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
            <Link to="/eventos" className="btn btn-secondary" style={{ flex: 1, textAlign: 'center' }}>
              Cancelar
            </Link>
            <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
              Criar Evento
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CriarEvento;