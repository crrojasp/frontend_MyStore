import './../Estilos/Detalle.css';
import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../UserContext';
import { useParams } from 'react-router-dom';

const DetalleProducto = () => {

    const [productos] = useContext(UserContext);
    const [detalle, setDetalle] = useState([])
    const params = useParams();

    useEffect(() => {
        productos.forEach(element => {
            if (element.id === parseInt(params.id)) {
                setDetalle(element)
            }
        });
    }, [params.id, productos])

    return (
        <>
            {
                <div key={detalle.id} className="detalle-producto">
                    <img className="imagen-producto" src={`data:image/jpeg;base64,${detalle.ilustracion}`} alt="imagen del producto" />
                    <div className="footer_producto">
                        <h1 className="nombre-producto">{detalle.nombre}</h1>
                        <p className="precio-producto">{`PRECIO: $${detalle.precio}`}</p>
                        <p className="descripcion">Descripcion: {detalle.descripcion}</p>
                    </div>
                </div>
            }
        </>
    )
}

export default DetalleProducto