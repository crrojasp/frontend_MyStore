import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './../Estilos/PantallaVendedor.css';

const PantallaVendedor = ({ darkMode }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/CrearProducto');
    };

    const [showProducts, setShowProducts] = useState(false);

    const handleShowProducts = () => {
        setShowProducts(true);
    };

    return (
        <div className={`vendedor-container ${darkMode ? 'dark' : 'light'}`}>
            <div className="vendedor-section bg-gradient-to-r from-blue-500 to-purple-500 py-8 px-4 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">Potencia el crecimiento de tu negocio con publicidad</h2>
                    <p className="text-lg mb-6">
                        Descubre nuestros planes de publicidad diseñados para ayudarte a alcanzar a más clientes, aumentar tus ventas y expandir tu negocio. Maximiza tu visibilidad y obtén resultados excepcionales con nuestras opciones publicitarias personalizadas.
                    </p>
                    <Link to="/Planes" className={`inline-block button-like-link ${darkMode ? 'dark' : 'light'}`}>
                        Ver planes ofrecidos
                    </Link>
                </div>
                <p></p>
                <br></br>
                <div className="max-w-4xl mx-auto text-center">
                    <button className={`button-3d ${darkMode ? 'dark' : 'light'}  `} onClick={handleClick}>
                        ¿Deseas crear un producto?
                    </button>
                </div>
                <div className="mis-productos max-w-4xl mx-auto text-center">
                    <div className="component-container max-w-4xl mx-auto text-center">
                        <div className="component max-w-4xl mx-auto text-center">
                            {!showProducts ? (
                                <div>
                                    <p>Acá podrás ver tus productos próximamente. Estamos en desarrollo.</p>
                                    <button className={`button-3d ${darkMode ? 'dark' : 'light'}`} onClick={handleShowProducts}>
                                        Ver productos
                                    </button>
                                </div>
                            ) : (
                                <div>
                                    <p>Aún no estamos listos, pero mejoraremos para ti. Recuerda que eres nuestra prioridad.</p>
                                </div>
                            )}
                        </div>
                        {/* Otro componente */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PantallaVendedor;
