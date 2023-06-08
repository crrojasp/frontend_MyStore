import React, { useState, useEffect, handleClick } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './../Estilos/Galeria.css';
import VistaProducto from '../vistas/VistaProducto';
import Buscador from '../vistas/Buscador';


export function Producto({id,ilustracion,precio,nombre}){

    return(
        <Link to='/VistaProducto'>
            <div key={id} className="card-producto">
                <img className="imagen-producto" src={`data:image/jpeg;base64,${ilustracion}`} alt="imagen del producto" style={{ width: '70%', height: '70%' }} />
                <div className="footer_producto">
                    <h1 className="nombre-producto">{nombre}</h1>
                    <p className="precio-producto">{`PRECIO: $${precio}`}</p>       
                </div>
                <div className="boton_carrito">
                    <button className='btn_carrito'>Añadir al carrito</button>
                </div>
            </div>
        </Link>   
    )
}

function Productos(){

    const [productos, setProductos] = useState([]);

    const [busqueda, setBusqueda] = useState('');

    const buscarProducto = (e) => {
        setBusqueda(e.target.value)
    }

    //filtrado de datos
    const results = !busqueda ? productos :  productos.filter((dato) => dato.nombre.toLowerCase().includes(busqueda.toLocaleLowerCase()))

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
        <p></p>
        <p></p>
        <Buscador busqueda={busqueda} buscarProducto={buscarProducto}/>
       
            <section>
                <div className="galeria">
                    {productos && productos.length > 0 ? (
                        results.map(producto => <Producto {...producto}/>)
                    ) : (
                        <p>Cargando los sapo perros productos...</p>
                    )}
                </div>
            </section>
        </>
    )
}

export default Productos;