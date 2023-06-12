import React, { useContext } from 'react';
import '../Estilos/Buscador.css';
import { Buscar } from './Icons';

function Buscador({ busqueda, buscarProducto, darkMode }) {
    const themeClass = darkMode ? 'dark' : 'light';

    return (
        <>
            <h3 className={`titulo ${themeClass}`}>Encuentra el producto que buscas</h3>
            <form className={`container-buscador ${themeClass}`}>
                <input
                    type="text"
                    placeholder="Buscar producto"
                    className={`input-buscar ${themeClass}`}
                    value={busqueda}
                    onChange={buscarProducto}
                />
                <button className={`btn-buscar ${themeClass}`} type="submit">
                    <Buscar />
                    Buscar
                </button>
            </form>
        </>
    );
}

export default Buscador;