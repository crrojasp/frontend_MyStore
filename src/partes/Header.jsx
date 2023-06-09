import React, { useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import '../Estilos/Header.css';
import 'boxicons';
import { CarritoContext } from '../CarritoContext';
import logoLight from './../components/images/logo.png';
import logoDark from './../components/images/logo2.png';
import { AuthContext } from './../AuthContext';
import { DeseadosContext } from '../DeseadosContext';



const Header = ({ handleLogout, setShowIngreso, darkMode  }) => {
    const { isLoggedIn, userData } = useContext(AuthContext);
    const [showMenu, setShowMenu] = useState(false);
    const [carrito, setCarrito] = useContext(CarritoContext);
    const [deseado, setDeseado] = useContext(DeseadosContext);

    const quantity = carrito.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0)

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className={`custom-header ${darkMode ? 'dark' : ''}`}>
            <div className="flex items-center gap-10 flex-grow">
                <Link to="/" className="text-white hover:text-gray-200 ">
                    <img src={darkMode ? logoDark : logoLight} alt="Logo" className="w-12 h-12" />
                </Link>
                <nav className="flex gap-4 justify-between gap-4 w-full h-full">
                    <Link to="/Planes" className="text-white hover:text-gray-200 ">
                        Planes
                    </Link>
                    <Link to="/Somos" className="text-white hover:text-gray-200 ">
                        MyStore
                    </Link>
                    <Link to="/" className="text-white hover:text-gray-200 ">
                        Soluciones
                    </Link>
                    <Link to="/" className="text-white hover:text-gray-200 ">
                        ¿Qué ofrecemos?
                    </Link>
                    <Link to="/Preguntas" className="text-white hover:text-gray-200 ">
                        Preguntas frecuentes
                    </Link>
                    {isLoggedIn ? (
                        <div className="relative">
                            <button onClick={handleMenuClick} className="focus:outline-none">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.172 7.757a.75.75 0 011.06-1.06l3.743 3.743 3.743-3.743a.75.75 0 111.06 1.06l-4.002 4.002a.75.75 0 01-1.06 0L5.172 8.818a.75.75 0 010-1.06z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </button>
                            {showMenu && (
                                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                    <div className="menu-container" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <Link
                                            onClick={() => {
                                                setShowMenu(false);
                                                // handleViewProfile();
                                            }}
                                            className="menu-item"
                                            role="menuitem"
                                        >
                                            Ver mi perfil
                                        </Link>
                                        <Link
                                            to='/cambiarClave'
                                            className="menu-item"
                                            role="menuitem"
                                        >
                                            Cambiar clave
                                        </Link>
                                        <Link
                                            onClick={() => {
                                                setShowMenu(false);
                                                handleLogout();
                                            }}
                                            className="menu-item"
                                            role="menuitem"
                                        >
                                            Cerrar sesión
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to="/ingreso" className='text-white hover:text-gray-200'>
                            Ingresar
                        </Link>
                    )}
                    <div className='carrito'>
                        <Link to="/carrito" >
                            <box-icon name="cart"></box-icon>
                            <span className="items-carrito">{quantity}</span>
                        </Link>
                    </div>
                    <div className='deseados'>
                        <Link to="/deseados" >
                            <i class="bi bi-bookmark-star-fill"></i>
                        </Link>
                    </div>
                    <Link to="/CreacionTienda" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Crear Tienda
                    </Link>
                </nav>
            </div >
        </header >
    );
};

export default Header;