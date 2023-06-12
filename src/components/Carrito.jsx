import './../Estilos/Detalle.css';
import React, { useContext } from 'react'
import 'boxicons';
import { CarritoContext } from '../CarritoContext';
import Producto from '../components/Producto';
import DetalleProducto from './DetalleProducto';

const Carrito = () => {

    const [carrito, setCarrito] = useContext(CarritoContext);

    const quantity = carrito.reduce((acc, curr) => {
        return acc + curr.quantity;
    } , 0);

    const PrecioTotal = carrito.reduce((acc, curr) => acc + curr.quantity * curr.precio , 0);

    return (
        <>
            <div className='cart-container'>
                <div className="cart-count">
                    <p>Productos en el carro: {quantity} </p>
                    <p>Total: ${PrecioTotal}</p>
                    <button onClick={() => console.log(carrito)}>Checkout</button>
                </div>
                <DetalleProducto/>
            </div>
        </>
    );
};

export default Carrito;