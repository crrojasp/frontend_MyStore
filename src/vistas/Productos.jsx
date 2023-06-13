import React, { useState, useEffect, handleClick, useContext } from 'react';
import axios from 'axios';
import './../Estilos/Galeria.css';
import Buscador from '../vistas/Buscador';
import Producto from '../vistas/Producto';
import { UserContext } from '../UserContext';

function Productos(){

    const [productos, setProductos] = useContext(UserContext);

    const [busqueda, setBusqueda] = useState('');

    const buscarProducto = (e) => {
        setBusqueda(e.target.value)
    }

    //filtrado de datos
    const results = !busqueda ? productos :  productos.filter((dato) => dato.nombre.toLowerCase().includes(busqueda.toLocaleLowerCase()))

    const obtener_productos = async () => {
        try {
            const response = await axios.get('http://localhost:8888/productos');
            setProductos(response.data.productos);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        obtener_productos();
    }, []);

    return(
        <>
        <p></p>
        <p></p>
        <Buscador busqueda={busqueda} buscarProducto={buscarProducto}/>
            <section>
                <div className="galeria">
                    {productos && productos.length > 0 ? (
                        results.map(producto => <Producto {...producto} key={producto.id}/>)
                    ) : (
                        <p>Cargando los productos...</p>
                    )}
                </div>
            </section>
        </>
    )
}

export default Productos;