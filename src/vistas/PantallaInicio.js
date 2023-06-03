import React, { useState, useEffect } from 'react';
import Ingreso from './../vistas/Ingreso';
import VentanaEmergente from './../partes/VentanaEmergente';
import './../Estilos/PantallaInicio.css';
import Productos from '../vistas/Productos';

const PantallaInicio = () => {

    const handleAbrirVentanaEmergente = () => {
        const ventanaEmergente = <VentanaEmergente />;

        // Estilos de la ventana emergente
        ventanaEmergente.style.position = 'fixed';
        ventanaEmergente.style.top = '50%';
        ventanaEmergente.style.left = '50%';
        ventanaEmergente.style.transform = 'translate(-50%, -50%)';
        ventanaEmergente.style.backgroundColor = 'white';
        ventanaEmergente.style.width = '300px';
        ventanaEmergente.style.height = '200px';
        ventanaEmergente.style.border = '1px solid black';

        // Agregar la ventana emergente al DOM
        document.body.appendChild(ventanaEmergente);
    };


    const handleClick = (producto) => {
        // Aquí puedes mostrar una vista previa a pantalla completa de la imagen del producto
    };

    return (
        
        <div className="pantalla-inicio-container" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Productos/>
            <script src="./../partes/VentanaEmergente.js"></script>
        </div>

    );
};

export default PantallaInicio;