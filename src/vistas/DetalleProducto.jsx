import './../Estilos/Detalle.css';
import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../UserContext';
import { Link ,useParams } from 'react-router-dom';
import Calificacion from './Calificacion';


const DetalleProducto = () => {

    const [productos] = useContext(UserContext);
    const [detalle, setDetalle] = useState([])
    const params = useParams();

    useEffect(() => {
        productos.forEach(element => {
            if(element.id === parseInt(params.id)){
                setDetalle(element)
            }
        });
    },[params.id,productos])

  return (
    <>
        {
            <div key={detalle.id} className="detalle-producto">
                <div className="contenedor-imagen">
                    <img className="imagen-detalle" src={`data:image/jpeg;base64,${detalle.ilustracion}`} alt="imagen del producto"/>
                </div>
                <div className="footer_producto">
                    <h1 className="nombre-producto-detalle">{detalle.nombre}</h1>
                    <p className="descripcion">Descripcion: {detalle.descripcion}</p>
                    <p className="precio-producto-detalle">{`PRECIO: $${detalle.precio}`}</p>
                    <Link to="/" className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        COMPRAR
                    </Link>
                    <p className="calificacion-producto">Califica el producto</p>
                    <Calificacion/>
                </div>
            </div>
        }
    </>
  )
}

export default DetalleProducto