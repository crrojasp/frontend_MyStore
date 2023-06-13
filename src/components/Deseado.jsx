import './../Estilos/Detalle.css';
import React, { useContext } from 'react'
import { DeseadosContext } from '../DeseadosContext';
import Producto from '../components/Producto';

const Deseado = () => {

    const [deseado, setDeseado] = useContext(DeseadosContext);

    const quantity = deseado.reduce((acc, curr) => {
        return acc + curr.quantity;
    } , 0);

    return (
        <>
            <div className='cart-container'>
                <div className="cart-count">
                    <p>Productos guardados: </p>
                </div>
                {deseado && deseado.length > 0 ? (
                        deseado.map((producto) => <Producto {...producto} ilustracion={producto.img} key={producto.id}/>
                        )
                    ) : (
                        <p>Cargando los productos...</p>
                    )}
            </div>
        </>
    );
};

export default Deseado;