import React from 'react';
import { Link } from 'react-router-dom';
import '../Estilos/Header.css';

const HeaderComprador = () => {
  return (
    <header className="flex justify-between items-center" style={{ backgroundColor: 'rgb(108, 53, 121)' }}>
      <div className="flex items-center gap-10 flex-grow">
        <img src="/logo.png" alt="Logo" className="w-12 h-12 img" />
        <nav className="nav">
          <Link to="/" className="nav-link">
            Planes
          </Link>
          <Link to="/" className="nav-link">
            MyStore
          </Link>
          <Link to="/" className="nav-link">
            Soluciones
          </Link>
          <Link to="/" className="nav-link">
            ¿Qué ofrecemos?
          </Link>
          <Link to="/" className="nav-link">
            Aprende
          </Link>
          <Link to="/Perfil" className="nav-link">
            Mostrar perfil
          </Link>
          <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Crear Tienda
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComprador;