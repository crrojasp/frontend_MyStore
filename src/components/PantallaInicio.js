import React, { useState, useEffect } from 'react';
import './../Estilos/Galeria.css';
import './../Estilos/PantallaInicio.css';
import Productos from '../components/Productos';

const PantallaInicio = ({darkMode}) => {
    const themeClass = darkMode ? 'dark' : 'light';
    const [mostrar, setMostrar] = useState({mostrar : false, producto : {}})

    const noVerProducto = () => setMostrar({mostrar : false , producto : {}})
    const handleClick = (producto) => {
        // Aquí puedes mostrar una vista previa a pantalla completa de la imagen del producto
    };

    return (
        <div className="pantalla-inicio-container" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Productos darkMode={darkMode}/>
        </div>
    );
};

export default PantallaInicio;