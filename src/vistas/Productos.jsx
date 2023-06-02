import React, { useState, useEffect, handleClick } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './../Estilos/Galeria.css';
import VistaProducto from '../vistas/VistaProducto';


function Productos(){

    const [productos, setProductos] = useState([]);

    const [mostrar, setMostrar] = useState({mostrar : false, producto : {}})

    const VerProducto = (producto) => setMostrar({mostrar : true , producto })

    const noVerProducto = () => setMostrar({mostrar : false , producto : {}})

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
        {/* <VistaProducto {...mostrar} cerrar={noVerProducto} />*/}
        <p></p>
        <p></p>
        <section>
            <div className="galeria">
                {productos && productos.length > 0 ? (
                    productos.map((producto) => (
                        <div key={producto.id} className="card-producto" onClick={() => VerProducto(producto)}>
                            <Link to="/VistaProducto" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Detalle
                            </Link>
                            <img className="imagen-producto" src={`data:image/jpeg;base64,${producto.ilustracion}`} alt="imagen del producto" style={{ width: '70%', height: '70%' }} />
                            <p className='titulo-producto'>
                                <span className="nombre-producto">{producto.nombre}</span>
                                <span className="precio-producto">{producto.precio}</span>
                            </p>
                        </div>
                    ))
                ) : (
                    <p>Cargando productos...</p>
                )}
            </div>
        </section>
        </>
    )
}

export default Productos;