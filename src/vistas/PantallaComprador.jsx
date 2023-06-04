import React, { useState, useEffect } from 'react';
import Ingreso from './../vistas/Ingreso';
import VentanaEmergente from './../partes/VentanaEmergente';
import './../Estilos/Galeria.css';
import './../Estilos/PantallaInicio.css';
import Buscador from '../vistas/Buscador';
import Productos from '../vistas/Productos';
import Footer from './../partes/Footer';

const PantallaComprador = () => {

    const [mostrar, setMostrar] = useState({mostrar : false, producto : {}})

    const noVerProducto = () => setMostrar({mostrar : false , producto : {}})
    


    const handleClick = (producto) => {
        // Aquí puedes mostrar una vista previa a pantalla completa de la imagen del producto
    };

    return (
        
        <div className="pantalla-inicio-container" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Buscador/>
            <Productos/>
            <script src="./../partes/VentanaEmergente.js"></script>
            <Footer/>
        </div>
    );
};

export default PantallaComprador;