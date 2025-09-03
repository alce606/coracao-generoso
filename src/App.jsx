import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import Suporte from './pages/Suporte';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Eventos from './pages/Eventos';
import CriarEvento from './pages/CriarEvento';
import DetalhesEvento from './pages/DetalhesEvento';
import EditarEvento from './pages/EditarEvento';
import LoginAdmin from './pages/LoginAdmin';
import GerenciamentoAdmin from './pages/GerenciamentoAdmin';
import PerfilUsuario from './pages/PerfilUsuario';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<SobreNos />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/eventos/criar" element={
            <ProtectedRoute adminOnly={true}>
              <CriarEvento />
            </ProtectedRoute>
          } />
          <Route path="/eventos/detalhes/:id" element={<DetalhesEvento />} />
          <Route path="/eventos/editar/:id" element={
            <ProtectedRoute adminOnly={true}>
              <EditarEvento />
            </ProtectedRoute>
          } />
          <Route path="/login-admin" element={<LoginAdmin />} />
          <Route path="/admin/gerenciamento" element={
           
              <GerenciamentoAdmin />
           
          } />
          <Route path="/suporte" element={<Suporte />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/perfil" element={
            <ProtectedRoute>
              <PerfilUsuario />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;