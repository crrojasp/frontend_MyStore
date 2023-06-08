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
                <div className="detalle">
                    <h2>{detalle.nombre}</h2>
                    <p className="precio">${detalle.precio}</p>
                    <p className="descripcion">Descripcion: {detalle.descripcion}</p>
                    <img className="imagen-producto" src={`data:image/jpeg;base64,${detalle.ilustracion}`} alt="imagen del producto" />
                </div>
            }
        </>
    )
}

export default DetalleProducto