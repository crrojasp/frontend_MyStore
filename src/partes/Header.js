import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Estilos/Header.css';
import { useAuth } from './../AuthContext.jsx';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { isLoggedIn, getUserData, logout } = useAuth();

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (isLoggedIn) {
      getUserData();
    }
  }, [isLoggedIn, getUserData]);

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
          {isLoggedIn ? (
            <div className="relative">
              <button onClick={handleMenuClick} className="focus:outline-none">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.172 7.757a.75.75 0 011.06-1.06l3.743 3.743 3.743-3.743a.75.75 0 111.06 1.06l-4.002 4.002a.75.75 0 01-1.06 0L5.172 8.818a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                </div>
              </button>
              {showMenu && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link
                      onClick={() => {
                        setShowMenu(false);
                        // handleViewProfile();
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      to="/profile"
                    >
                      Ver mi perfil
                    </Link>
                    <Link
                      to="/cambiarClave"
                      className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Cambiar clave
                    </Link>
                    <Link
                      onClick={() => {
                        setShowMenu(false);
                        logout();
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Cerrar sesión
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="/ingreso" className="nav-link">
              Ingresar
            </Link>
          )}
          <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Crear Tienda
          </Link>
        </nav>
      </div>
    </header>
  );
};
export default Header;