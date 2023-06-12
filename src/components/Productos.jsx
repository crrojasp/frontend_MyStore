import React, { useState, useEffect, handleClick, useContext } from 'react';
import axios from 'axios';
import './../Estilos/Galeria.css';
import Buscador from '../components/Buscador';
import Producto from '../components/Producto';
import { UserContext } from '../UserContext';

function Productos({ darkMode }) {
    const themeClass = darkMode ? 'dark' : 'light';
    const [productos, setProductos] = useContext(UserContext);
    const [busqueda, setBusqueda] = useState('');

    const buscarProducto = (e) => {
        setBusqueda(e.target.value)
    }

    //filtrado de datos
    const results = !busqueda ? productos : productos.filter((dato) => dato.nombre.toLowerCase().includes(busqueda.toLocaleLowerCase()))

    const [mostrar, setMostrar] = useState({ mostrar: false, producto: {} })

    const VerProducto = (producto) => setMostrar({ mostrar: true, producto })

    const noVerProducto = () => setMostrar({ mostrar: false, producto: {} })

    const obtener_productos = async () => {
        try {
            const response = await axios.get('https://httpsbackendmystoreunal.com/productos');
            setProductos(response.data.productos);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        obtener_productos();
    }, []);

    return (
        <>
            <p></p>
            <p></p>
            <Buscador darkMode={darkMode} busqueda={busqueda} buscarProducto={buscarProducto} />
            <section>
                <div className={`galeria ${darkMode ? 'dark' : 'light'}`}>
                    {productos && productos.length > 0 ? (
                        results.map(producto => <Producto {...producto} key={producto.id} />)
                    ) : (
                        <p>Cargando los productos...</p>
                    )}
                </div>
            </section>
        </>
    )
}

export default Productos;