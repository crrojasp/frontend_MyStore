import React from 'react';
import './../Estilos/PantallaVendedor.css';
import { Link, useNavigate } from 'react-router-dom';
const PantallaVendedor = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/CrearProducto');
    };
    return (
        <div>
            {/* Espacio para mostrar otro componente */}
            <div className="other-component">
                {/* Contenido del otro componente */}
            </div>

            {/* Botón "¿Deseas crear un producto?" */}
            <button className="button-3d" onClick={handleClick}>¿Deseas crear un producto?</button>

            {/* Mis productos */}
            <div className="mis-productos">
                {/* Contenido de "Mis productos" */}
            </div>
        </div>
    );
}

export default PantallaVendedor;